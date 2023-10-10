import React, { useContext } from "react";
import { useEffect } from 'react';

import "./activities.scss";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import $ from "jquery";
import CCard from "../restaurants/CCard";
import { RestaurantsContext } from "../restaurants/RestaurantContext";
// import ReelModal from "../reels/Modal/ReelModal";
import Modal22 from "../reels/Modal22/Modal22";


export default function Activities() {
  const state = useContext(RestaurantsContext);

  /* Demo purposes only */
  $(".hover").mouseleave(function () {
    $(this).removeClass("hover");
  });


  return (
    <>
      <Header />



   <div className="ssss">
<div className="portfolioact">
  <div className="item" data-aos="fade-up">
    <div className="inner">
      <img src="https://files.samvdhwebdev.nl/images/1.jpg" alt="" />
    </div>
  </div>
  <div className="item" data-aos="fade-up">
    <div className="inner">
      <img src="https://files.samvdhwebdev.nl/images/2.jpg" alt="" />
    </div>
  </div>
  <div className="item" data-aos="fade-up">
    <div className="inner">
      <img src="https://files.samvdhwebdev.nl/images/6.jpg" alt="" />
    </div>
  </div>
  <div className="item" data-aos="fade-up">
    <div className="inner">
      <img src="https://files.samvdhwebdev.nl/images/4.jpg" alt="" />
    </div>
  </div>
  
 
</div>

</div>










      {/* <div>
        <div className="glassss-overlay">


        </div>
        <section id="seeection-a">
          <div className="about">
            <p className="text-white scroll-page about-p-one">Give yourself the gift<br />of Good Food</p>
            <p className="text-white scroll-page about-p-two">Enjoy a wonderful dining experience</p>
          </div>
        </section>

      </div> */}

      {/* <a class="Me" href="https://bit.ly/m/JordanDey" target="_top">CodePen by Jordan Dey</a> */}

      <div className="bbb">

        {/* --------------------------------- cards resturants------------------------------------- */}

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
                        src="https://www.ayla.com.jo/wp-content/uploads/2020/02/Scuba-scaled.jpg"
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
                      <a href="#">Snorkelling</a>
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
                        src="https://select.jo/wp-content/uploads/2019/08/al-abdali.png"
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
                      <a href="#">Boulevard</a>
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
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/222352566.jpg?k=4f44d00886f5281eae3df71d1f22d4d62f44efb5da8c68904971b2f7af6708a6&o=&hp=1"
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
                      <a href="#">Bubbles</a>
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
          
            Our Activities
          </h2>
          <p className="section-subtitle"></p>
        <br />
        <br />
        </div>
        <div className="ccontainerr">
          {state.activitiesList.map((element) => {
            return (
              <>
                <CCard key={element.id} element={element} activId={element.id} />
                {/* <ReelModal restId={element.id} /> */}
                <Modal22 activId={element.id} />
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
