import "./Favorites.scss";
import Card from "./favCard/Card";
import FavHero from "./favHero/FavHero";

const Favorites = () => {
  return (
    <>
      <div className="favPicture">
          <FavHero />
          <div className="favCategoryyyy">Restaurants</div>
          <Card />
          <div className="favCategoryyyy">Hotels</div>
          <Card />
          <div className="favCategoryyyy">Activities</div>
          <Card />
      </div>
    </>
  );
};

export default Favorites;
