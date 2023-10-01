import "./restaurants.scss";

import service1 from "../../assets/service-1.jpg";
import service2 from "../../assets/service-2.jpg";
import service3 from "../../assets/service-3.jpg";
import shape1 from "../../assets/shape-1.png";
import shape2 from "../../assets/shape-2.png";
import event2 from "../../assets/event-2.jpg";
import jubran from "../../assets/jubran.jpg";
import burger from "../../assets/burger.jpg";
import rest2 from "../../assets/rest2.png";
import rest4 from "../../assets/rest4.jpg";
import mansaf2 from "../../assets/mansaf2.jpg";

export default function Restaurants() {
  return (
    <>
      {/* --------------------------------- TOP resturants------------------------------------- */}
      <section
        className="section service bg-black-10 text-center"
        aria-label="service"
      >
        <div className="container-top-three-resturants">
          <br />
          <p className="section-subtitle2 label-2">Flavors For Royalty</p>
          <h2 className="headline-1 section-title">Top Resturants</h2>
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
                      src={service1}
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
                    <a href="#">Breakfast</a>
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
                      src={service2}
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
                    <a href="#">Appetizers</a>
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
                      src={service3}
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
                    <a href="#">Drinks</a>
                  </h3>
                  <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <img
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
          />
        </div>
      </section>

      {/* --------------------------------- cards resturants------------------------------------- */}

      <section className="section event bg-black-10" aria-label="event">
        <div className="container">
          <p className="headline-1 section-title ">Our Resturants</p>
          <p className="section-subtitle"></p>
          <br />
          <ul className="grid-list">
            <li>
              <div className="event-card has-before :shine">
                <div
                  className="card-banner img-holder"
                  style={{ "--width": "350", "--height": "450" }}
                >
                  <img
                    src={mansaf2}
                    width={350}
                    height={450}
                    loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes."
                    className="img-cover"
                  />
                  <time className="publish-date label-2" dateTime="2022-09-15">
                    ⭐⭐⭐⭐
                  </time>
                </div>
                <div className="card-content">
                  <p className="card-subtitle label-2 text-center with-shadow">
                    Mansaf
                  </p>
                  <h3 className="card-title2  text-center">
                    Flavour so good try to eat with your eyes. Flavour so good
                    try to eat with your eyes.
                  </h3>
                  <br />
                  <p className="card-subtitle label-2 text-center">
                    price: 10$
                  </p>
                  <br />
                  <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="event-card has-before :shine">
                <div
                  className="card-banner img-holder"
                  style={{ "--width": "350", "--height": "450" }}
                >
                  <img
                    src={burger}
                    width={350}
                    height={450}
                    loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes."
                    className="img-cover"
                  />
                  <time className="publish-date label-2" dateTime="2022-09-03">
                    ⭐⭐⭐⭐
                  </time>
                </div>
                <div className="card-content">
                  <p className="card-subtitle label-2 text-center">burger</p>
                  <h3 className="card-title2  text-center">
                    Flavour so good try to eat with your eyes. Flavour so good
                    try to eat with your eyes.
                  </h3>
                  <br />
                  <p className="card-subtitle  label-2 text-center">
                    price: 10$
                  </p>
                  <br />
                  <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="event-card has-before :shine">
                <div
                  className="card-banner img-holder"
                  style={{ "--width": "350", "--height": "450" }}
                >
                  <img
                    src={event2}
                    width={350}
                    height={450}
                    loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes."
                    className="img-cover"
                  />
                  <time className="publish-date label-2" dateTime="2022-09-08">
                    ⭐⭐⭐⭐
                  </time>
                </div>
                <div className="card-content">
                  <p className="card-subtitle label-2 text-center">Hashem</p>
                  <h3 className="card-title2  text-center">
                    Flavour so good try to eat with your eyes. Flavour so good
                    try to eat with your eyes.
                  </h3>
                  <br />
                  <p className="card-subtitle label-2 text-center">
                    price: 10$
                  </p>
                  <br />
                  <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="event-card has-before :shine">
                <div
                  className="card-banner img-holder"
                  style={{ "--width": "350", "--height": "450" }}
                >
                  <img
                    src={jubran}
                    width={350}
                    height={450}
                    loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes."
                    className="img-cover"
                  />
                  <time className="publish-date label-2" dateTime="2022-09-03">
                    ⭐⭐⭐⭐
                  </time>
                </div>
                <div className="card-content">
                  <p className="card-subtitle label-2 text-center">Jubran</p>
                  <h3 className="card-title2  text-center">
                    Flavour so good try to eat with your eyes. Flavour so good
                    try to eat with your eyes.
                  </h3>
                  <br />
                  <p className="card-subtitle label-2 text-center">
                    price: 10$
                  </p>
                  <br />
                  <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="event-card has-before :shine">
                <div
                  className="card-banner img-holder"
                  style={{ "--width": "350", "--height": "450" }}
                >
                  <img
                    src={rest4}
                    width={350}
                    height={450}
                    loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes."
                    className="img-cover"
                  />
                  <time className="publish-date label-2" dateTime="2022-09-03">
                    ⭐⭐⭐⭐
                  </time>
                </div>
                <div className="card-content">
                  <p className="card-subtitle label-2 text-center">Falafel</p>
                  <h3 className="card-title2  text-center">
                    Flavour so good try to eat with your eyes. Flavour so good
                    try to eat with your eyes.
                  </h3>
                  <br />
                  <p className="card-subtitle label-2 text-center">
                    price: 10$
                  </p>
                  <br />
                  <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="event-card has-before :shine">
                <div
                  className="card-banner img-holder"
                  style={{ "--width": "350", "--height": "450" }}
                >
                  <img
                    src={rest2}
                    width={350}
                    height={450}
                    loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes."
                    className="img-cover"
                  />
                  <time className="publish-date label-2" dateTime="2022-09-03">
                    ⭐⭐⭐⭐
                  </time>
                </div>
                <div className="card-content">
                  <p className="card-subtitle label-2 text-center">
                    Bake House
                  </p>
                  <h3 className="card-title2 text-center">
                    Flavour so good try to eat with your eyes. Flavour so good
                    try to eat with your eyes.
                  </h3>
                  <br />
                  <p className="card-subtitle label-2 text-center">
                    price: 10$
                  </p>
                  <br />
                  <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
