import React, { useContext } from "react";
import "./Hotel.scss";
import movinpick from "../../assets/movinpick.jpg";
import hotel2 from "../../assets/hotel2.avif";
import hotel3 from "../../assets/crown-hotel.webp";
import hotel4 from "../../assets/hotel5.jpg";
import hotel5 from "../../assets/hotel6.jpg";
import hilton from "../../assets/hilton.webp";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CCard from "../restaurants/CCard";
import { RestaurantsContext } from "../restaurants/RestaurantContext";
// import ReelModal from "../reels/Modal/ReelModal";
import Modal22 from "../reels/Modal22/Modal22";


const Hotel = () => {
  const state = useContext(RestaurantsContext);

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
          <div></div>
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
          <div className="container">
            {state.hotelsList.map((element) => {
              return (
                <>
                  <div>
                    <CCard key={element.id} element={element} hotelId={element.id}/>
                    <div className="s">
                    {/* <ReelModal hotelId={element.id} /> */}
                    <Modal22 hotelId={element.id} />

                    </div>
                  </div>
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
