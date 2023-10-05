import React from "react";
import "./Hotel.scss";
import movinpick from "../../assets/movinpick.jpg";
import hotel2 from "../../assets/hotel2.avif";
import hotel3 from "../../assets/crown-hotel.webp";
import hotel4 from "../../assets/hotel5.jpg";
import hotel5 from "../../assets/hotel6.jpg";
import hilton from "../../assets/hilton.webp";

const Hotel = () => {
  return (
    <>
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
          <a href="#" className="hero-btn has-after">
            <img
              className="imgg"
              src="./assets/hero-icon.png"
              width={48}
              height={48}
              alt="booking icon"
            />
            <span className="label-2 text-center span">Book A Table</span>
          </a>
          <div>
      
    </div>
          {/* ------------------------------------ cards ----------------------------------------------- */}
          <div className="header">
          <div className="parallax-container">
                <h2 className="headline-1 section-title "><p className="section-subtitle2"></p>Our Hotels<p className="section-subtitle3"></p>  </h2>
            <p className="section-subtitle"></p>
            
          </div>
          </div>
          <br />
          <br />
          <div className="container">
            <div className="item">
              <div className="item-image">
                <img src={movinpick} alt="Délicieux Bénédicte" />
              </div>
              <div className="item-text">
                <p className="item-meal-type">⭐⭐⭐</p>
                <h2 className="item-title">Movenpick</h2>
                <p className="item-body">
                  Our hotel is designed to be a haven of comfort, providing a
                  modern amenities and classic elegance.
                </p>
                <a href="#" className="btn-text hover-underline label-2">
                  Book now
                </a>
              </div>
              <div className="item-price">150JD</div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={hotel2} alt="Du bœuf Burger" />
              </div>
              <div className="item-text">
                <p className="item-meal-type">⭐⭐⭐⭐</p>
                <h2 className="item-title">InterContinental</h2>
                <p className="item-body">
                  Immerse yourself in the warm and inviting ambiance of our
                  hotel, whereyour sense of comfort.
                </p>
                <a href="#" className="btn-text hover-underline label-2">
                  Book now
                </a>
              </div>
              <div className="item-price">110JD</div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={hotel3} alt="Soupe à l’oignon" />
              </div>
              <div className="item-text">
                <p className="item-meal-type">⭐⭐⭐⭐</p>
                <h2 className="item-title">Crown plaza</h2>
                <p className="item-body">
                Experience unparalleled hospitality with our dedicated staff, committed to delivering personalized.
                </p>
                <a href="#" className="btn-text hover-underline label-2">
                  Book now
                </a>
              </div>
              <div className="item-price">70JD</div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={hotel4} alt="Soupe à l’oignon" />
              </div>
              <div className="item-text">
                <p className="item-meal-type">⭐⭐⭐⭐</p>
                <h2 className="item-title">Kempiniski</h2>
                <p className="item-body">
                Indulge in the plush luxury of our well-appointed rooms, meticulously designed perfectly.
                </p>
                <a href="#" className="btn-text hover-underline label-2">
                  Book now
                </a>
              </div>
              <div className="item-price">100JD</div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={hotel5} alt="Soupe à l’oignon" />
              </div>
              <div className="item-text">
                <p className="item-meal-type">⭐⭐⭐</p>
                <h2 className="item-title">Fairmont </h2>
                <p className="item-body">
                From the moment you step into our lobby, you will be greeted by a welcoming atmosphere .
                </p>
                <a href="#" className="btn-text hover-underline label-2">
                  Book now
                </a>
              </div>
              <div className="item-price">50JD</div>
            </div>{" "}
            <div className="item">
              <div className="item-image">
                <img src={hilton} alt="Soupe à l’oignon" />
              </div>
              <div className="item-text">
                <p className="item-meal-type">⭐⭐⭐</p>
                <h2 className="item-title">Hilton</h2>
                <p className="item-body">
                Elevate your stay with our range of premium services, including concierge assistance, spa facilities.
                </p>
                <a href="#" className="btn-text hover-underline label-2">
                  Book now
                </a>
              </div>
              <div className="item-price">120JD</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
