import "./Favorites.scss";
import Card from "./favCard/Card";
import FavHero from "./favHero/FavHero";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useContext, useEffect, useState } from "react";
import cookie from "react-cookies";
import superagent from "superagent";
import { LoginContext } from "../Auth/login/LogInContext";
import { FavoritesContext } from "./favContext";

const Favorites = () => {
  const [favList, setFavList] = useState([]);

  const LoginState = useContext(LoginContext);
  const favstate = useContext(FavoritesContext);

  console.log(LoginState.user.id, "/////////////");

  // console.log(favstate.favList, "favs from compoonent");
  const getFromFavsDb = async () => {
      // if (LoginState.user.id) {
      const userId = LoginState.user.id;
      console.log(userId, "u+++++++++++++");
      try {
        const response = await superagent
          .get(`${import.meta.env.VITE_DATABASE_URL}/favorite/${userId}`)
          .set("authorization", `Bearer ${cookie.load("auth")}`);
        if (response.ok) {
          const items = response.body;
          // console.log(items.favs,"items++++++++")
          // console.log(response.body);
          // console.log(favList,"favList");

          setFavList(items.favs);
        }
      } catch (error) {
        console.error(error);
      }
    // }
    };

    useEffect(() => {
      getFromFavsDb();
    }, [LoginState.user.id]);



  return (
    <>
      <Header />

      <div className="favPicture">
        <FavHero />

        <div className="favCategoryyyy">✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ </div>
        {/* <button
          onClick={() => {
            getFromFavsDb
          }}
        >
          get from data
        </button> */}
        <div className="favs-items">
          {favList.map((element) => {
            return <Card key={element.id} element={element} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
