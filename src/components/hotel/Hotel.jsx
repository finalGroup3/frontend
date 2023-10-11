import React, { useContext,useEffect } from "react";
import "./Hotel.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CCard from "../restaurants/CCard";
import { RestaurantsContext } from "../restaurants/RestaurantContext";
// import ReelModal from "../reels/Modal/ReelModal";
import Modal22 from "../reels/Modal22/Modal22";


const Hotel = () => {
  const state = useContext(RestaurantsContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="hhhh">
        <div className="hotel-container">
          <section className="hero text-center" aria-label="home" id="home">
            <ul className="hero-slider" data-hero-slider>
              <li className="slider-item active" data-hero-slider-item>
                <div className="slider-bg">
                  <div className="shadow"></div>
                  <img
                    // src="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                    // src="https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                    // src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    // src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    src="https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1514&q=80"
                    width={1880}
                    height={950}
                    alt
                    className="img-cover"
                  />
                </div>
                <h1 className="display-1 hero-title slider-reveal">
                  Enjoy Your Holidays <br />
                  in Perfect Place
                </h1>
                {/* <p className="label-2 section-subtitle slider-reveal">
                  Tradational &amp; Hygine
                </p> */}
              </li>
            </ul>
          </section>
          <br />
          <br />
          <h2 className="headline-1 section-title">✧✧ Top Hotels ✧✧</h2>
            <p className="section-subtitle"></p>
<div className="TopTop">
            <section
          className="section service bg-black-10 text-center "
          aria-label="service"
        >
          <div className="container-top-three-resturants">
            <br />
            {/* <h2 className="headline-1 section-title">Top Resturants</h2> */}

            {/* <button onClick={() => state.deleteRestaurantsInDb("send the id")}>delete</button>
            <button onClick={() => state.AddToRestaurantsDb("send the item")}>add</button>
            <button onClick={() => state.updateRestaurantsInDb("send the id")}>update</button> */}

            {/* <p className="section-subtitle2 label-2">Flavors For Royalty</p> */}
            {/* <p className="section-subtitle"></p> */}
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
                        src="https://media.cntraveler.com/photos/53d9b725dcd5888e1459604a/16:9/w_2560,c_limit/m-venpick-resort-residence-aqaba-aqaba-jordan-109878-1.jpg"
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
                      <a href="#">Movenpick</a>
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
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/37/3d/a5/hotel-facade.jpg?w=1200&h=-1&s=1"
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
                      <a href="#">Fairmont</a>
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
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/68/45/8a/exterior.jpg?w=1100&h=-1&s=1"
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
                      <a href="#">Helton</a>
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

        </div>

        </div>

            
          {/* <a href="#" className="hero-btn has-after">
            <img
              className="imgg"
              src="./assets/hero-icon.png"
              width={48}
              height={48}
              alt="booking icon"
            />
            <span className="label-2 text-center span">Book A Table</span>
          </a> */}
          <div className="hhhhh">
          {/* ------------------------------------ cards ----------------------------------------------- */}

          <div className="header">
            <div className="parallax-container">
              <h2 className="headline-1 section-title ">
                <p className="section-subtitle2"></p>Our Hotels
                <p className="section-subtitle3"></p>{" "}
              </h2>
              <p className="section-subtitle"></p>
            </div>
          </div>
          <br />
          <br />
          <div className="containerr">
            {state.hotelsList.map((element) => {
              return (
                <>
                  
                    <CCard key={element.id} element={element} hotelId={element.id}/>
                    
                    {/* <ReelModal hotelId={element.id} /> */}
                    <Modal22 hotelId={element.id} />

                   
                </>
              );
            })}
                  
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Hotel;
