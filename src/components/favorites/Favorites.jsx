import "./Favorites.scss";
import Card from "./favCard/Card";
import FavHero from "./favHero/FavHero";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Favorites = () => {
  return (
    <>
      <Header />
      <div className="favPicture">
        <FavHero />
        <div className="favCategoryyyy">Restaurants</div>
        <Card />
        <div className="favCategoryyyy">Hotels</div>
        <Card />
        <div className="favCategoryyyy">Activities</div>
        <Card />
        <Footer />
      </div>
    </>
  );
};

export default Favorites;
