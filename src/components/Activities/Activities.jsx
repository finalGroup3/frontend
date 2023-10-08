import React, { useContext } from "react";
import "./activities.scss";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import $ from "jquery";
import CCard from "../restaurants/CCard";
import { RestaurantsContext } from "../restaurants/RestaurantContext";

export default function Activities() {
  const state = useContext(RestaurantsContext);

  /* Demo purposes only */
  $(".hover").mouseleave(function () {
    $(this).removeClass("hover");
  });

  return (
    <>
      <Header />

      {/* <a class="Me" href="https://bit.ly/m/JordanDey" target="_top">CodePen by Jordan Dey</a> */}

      <div className="bbb">
        <section
          className="section service bg-black-10 text-center "
          aria-label="service"
        >
          <div className="container-top-three-resturants">
            <br />
            <h2 className="headline-1 section-title">Top Activities</h2>
            <p className="section-subtitle2 label-2">
              Your Dream Vacation Destinations
            </p>
            <p className="section-subtitle"></p>
            <br />
            <br />

            <div className="acthed">
              <figure class="snip1432">
                <img
                  src="https://jordantraveler.com/wp-content/uploads/2022/05/Amman-Itinerary-Hero.png"
                  alt="sample36"
                />
                <figcaption>
                  <div>
                    <h3>Discover the Heart of Jordan</h3>
                    <h3>where ancient history meets modern vibrancy</h3>
                  </div>
                  <div>
                    <h2>Amman</h2>
                  </div>
                </figcaption>
                <a href="#"></a>
              </figure>
              <figure class="snip1432">
                <img
                  src="https://media.meer.com/attachments/5594c4d91edbe7f4e0cf444ebca76b5447aba597/store/fill/860/645/ab222a80768bae72a4c3025f24abff06bab861b36cb7dc55fa1343678810/Camping-site-at-Wadi-Rum-Jordan.jpg"
                  alt="sample83"
                />
                <figcaption>
                  <div>
                    <h3>Desert Adventures Await</h3>
                    <h3>Where Desert Dreams Begin</h3>
                  </div>
                  <div>
                    <h2>Wadi Rum</h2>
                  </div>
                </figcaption>
                <a href="#"></a>
              </figure>
              <figure class="snip1432">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/363631744.jpg?k=d3c1fbc114b0e85bb9e59931d6b83cc26a3a404eed01f1e4889a3c66394a5bc2&o=&hp=1" />
                <figcaption>
                  <div>
                    <h3>Beach Bliss and Beyond</h3>
                    <h3>Where Adventure Meets Tranquility</h3>
                  </div>
                  <div>
                    <h2>Aqaba</h2>
                  </div>
                </figcaption>
                <a href="#"></a>
              </figure>
            </div>
            {/* <ul className="grid-list">
                            <li>
                                <div className="service-card">
                                    <a href="#" className="has-before hover:shine">
                                        <figure
                                            className="card-banner img-holder"
                                            style={{ "--width": "285", "--height": "336" }}
                                        >
                                            <img
                                                src="https://jordantraveler.com/wp-content/uploads/2022/05/Amman-Itinerary-Hero.png"
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
                                            <a href="#">Amman</a>
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
                                                src="https://media.meer.com/attachments/5594c4d91edbe7f4e0cf444ebca76b5447aba597/store/fill/860/645/ab222a80768bae72a4c3025f24abff06bab861b36cb7dc55fa1343678810/Camping-site-at-Wadi-Rum-Jordan.jpg"
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
                                            <a href="#">Wadi Rum</a>
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
                                                src="https://digital.ihg.com/is/image/ihg/intercontinental-aqaba-4008417344-16x9?"
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
                                            <a href="#">Aqaba</a>
                                        </h3>
                                        <a href="#" className="btn-text hover-underline label-2">
                                            Book now
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul> */}
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
            {/* <p className="steak"></p> */}
            Our Activities
            {/* <p className="steak"></p> */}
          </h2>
          <p className="section-subtitle"></p>
        </div>
        <div className="container">
          {state.activitiesList.map((element) => {
            return (
              <>
                <div>
                  <CCard key={element.id} element={element} />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
