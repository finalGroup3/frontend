import "./Favorites.scss";
import Card from "./favCard/Card";
import FavHero from "./favHero/FavHero";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useContext } from "react";

import { LoginContext } from "../Auth/login/LogInContext";
import { FavoritesContext } from "./favContext";


const Favorites = () => {
  const LoginState = useContext(LoginContext);
  const favstate = useContext(FavoritesContext);

  console.log(LoginState.user.id, "/////////////");

  console.log(favstate.favList, "favs from compoonent");

  return (
    <>
      <Header />
      
      <div className="favPicture">
        <FavHero />
        
        <div className="favCategoryyyy">✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧  </div>
        {/* <button
          onClick={() => {
            getFromFavsDb
          }}
        >
          get from data
        </button> */}
        <div className="favs-items"> 
            {favstate.favList.map((element) => {
          return <Card key={element.id} element={element} />;
        })}
        </div>
      
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
