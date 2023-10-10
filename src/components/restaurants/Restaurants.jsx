import "./restaurants.scss";
import { useContext, useEffect, useState } from "react";
import service1 from "../../assets/service-1.jpg";
import service2 from "../../assets/jubran.jpg";
import service3 from "../../assets/service-3.jpg";
import shape1 from "../../assets/shape-1.png";
import shape2 from "../../assets/shape-2.png";
import jubran from "../../assets/jubran.jpg";
import burger from "../../assets/burger.jpg";
import rest2 from "../../assets/rest2.png";
import salt from "../../assets/SALT.jpg";
import rest4 from "../../assets/rest4.jpg";
import mansaf2 from "../../assets/mansaf2.jpg";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import dominos from "../../assets/dominos.jpg";
import { RestaurantsContext } from "./RestaurantContext";
import { FavoritesContext } from "../favorites/favContext";
import CCard from "./CCard";
import HeroRest from "./HeroRest";
// import ReelModal from "../reels/Modal/ReelModal";
import Modal22 from "../reels/Modal22/Modal22";

export default function Restaurants() {
  const state = useContext(RestaurantsContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FaveState = useContext(FavoritesContext);
  // const addfave = () => {
  //   FaveState.AddToFavsDb(element)
  // };
  return (
    <>
      <Header />
      <HeroRest/>
      {/* --------------------------------- TOP resturants------------------------------------- */}
      <div className="bbb22">
        <section
          className="section service bg-black-10 text-center "
          aria-label="service"
        >
          <div className="container-top-three-resturants">
            <br />
            <h2 className="headline-1 section-title">Top Resturants</h2>

            {/* <button onClick={() => state.deleteRestaurantsInDb("send the id")}>delete</button>
            <button onClick={() => state.AddToRestaurantsDb("send the item")}>add</button>
            <button onClick={() => state.updateRestaurantsInDb("send the id")}>update</button> */}

            <p className="section-subtitle2 label-2">Flavors For Royalty</p>
            <p className="section-subtitle"></p>
            <br />
            <br />
            <ul className="grid-list">
              <li>
                <div className="service-card">
                  <a href="#" className="has-before hover:shine">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "285", "--height": "336" }}
                    >
                      <img
                        src={service2}
                        width={285}
                        height={336}
                        loading="lazy"
                        alt="Breakfast"
                        className="img-cover"
                      />
                    </figure>
                  </a>
                  <div className="card-content">
                    <h3 className="title-4 card-title">
                      <a href="#">Jubran</a>
                    </h3>
                    <a href="#" className="btn-text hover-underline label-2">
                      Book now
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <a href="#" className="has-before hover:shine">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "285", "--height": "336" }}
                    >
                      <img
                        src={salt}
                        width={285}
                        height={336}
                        loading="lazy"
                        alt="Appetizers"
                        className="img-cover"
                      />
                    </figure>
                  </a>
                  <div className="card-content">
                    <h3 className="title-4 card-title">
                      <a href="#">SALT</a>
                    </h3>
                    <a href="#" className="btn-text hover-underline label-2">
                      Book now
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <a href="#" className="has-before hover:shine">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "285", "--height": "336" }}
                    >
                      <img
                        src={dominos}
                        width={285}
                        height={336}
                        loading="lazy"
                        alt="Drinks"
                        className="img-cover"
                      />
                    </figure>
                  </a>
                  <div className="card-content">
                    <h3 className="title-4 card-title">
                      <a href="#">DOMINOS</a>
                    </h3>
                    <a href="#" className="btn-text hover-underline label-2">
                      Book now
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            {/* <img
              src={shape1}
              width={246}
              height={412}
              loading="lazy"
              alt="shape"
              className="shape shape-1 move-anim"
            />
            <img
              src={shape2}
              width={343}
              height={345}
              loading="lazy"
              alt="shape"
              className="shape shape-2 move-anim"
            /> */}
          </div>
        </section>

        {/* --------------------------------- cards resturants------------------------------------- */}

        <div className="header">
          <h2 className="headline-1 section-title">
            <p className="steak"></p>
            Our Resturants<p className="steak"></p>
          </h2>
          <p className="section-subtitle"></p>
        </div>
        <div className="ccontainerr">
          {state.restaurantsList.map((element) => {
            return (
              <>
                <CCard key={element.id} element={element} restId={element.id} />
                {/* <ReelModal restId={element.id} /> */}
                <Modal22 restId={element.id} />
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
