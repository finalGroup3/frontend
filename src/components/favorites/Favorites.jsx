import "./Favorites.scss";
import Card from "./favCard/Card";
import FavHero from "./favHero/FavHero";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Auth/login/LogInContext";
import { FavoritesContext } from "./favContext";

const Favorites = () => {
  // const [favList, setFavList] = useState([]);

  // const LoginState = useContext(LoginContext);
  // console.log(LoginState.user.id, "****************");

  const FaveState = useContext(FavoritesContext);
  // console.log(FaveState.favList, "fav from favpage");

  // useEffect(() => {
  //   console.log(FaveState.getFromFavsDb());
  //   setFavList(FaveState.getFromFavsDb());
  //   console.log(favList);
  // }, []);

  return (
    <>
      <Header />
      <div className="favPicture">
        <FavHero />
        <div className="favCategoryyyy">Restaurants</div>
        <button
          onClick={() => {
            FaveState.getFromFavsDb();
          }}
        >
          get from data{" "}
        </button>
        {FaveState.favList.map((element) => {
          return <Card element={element} />;
        })}
        <Footer />
      </div>
    </>
  );
};

export default Favorites;
