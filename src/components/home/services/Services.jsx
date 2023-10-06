/* eslint-disable react/no-unescaped-entities */
import "./Services.scss";
// import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="serviceContain">
      <h2 className="services-heading">Our services</h2>
      <p className="services-text">
        Our website offers a wide range of services to cater to your leisure and
        travel needs. Whether you're looking to satisfy your taste buds at a
        restaurant, find a comfortable and convenient hotel for your stay, or
        discover exciting entertainment venues, we have you covered
      </p>

      
      <span >---------------------------------------------------------------------</span>

      <section className="cards">
        <article className="card card--1">
          <div className="shade"></div>
          <div className="card__img"></div>
          <a href="#" className="card_link">
            <div className="card__img--hover"></div>
          </a>
          <div className="card__info__shade">
            <div className="card__info">
              <span className="card__category"> RESTAURANTS</span>
              <h3 className="card__title">
                Discover delicious food places to make your day much better with
                Our restaurants in Jordan provide delicious breakfast, brunch,
                lunch, or dinner.
              </h3>
              <div className="services-bttnnss">
                <button className="services-bttnn">
                  {" "}
                  see more &#10095;&#10095;{" "}
                </button>
              </div>
            </div>
          </div>
        </article>

        <article className="card card--2 carrd22">
          <div className="shade"></div>
          <div className="card__img"></div>
          <a href="#" className="card_link">
            <div className="card__img--hover"></div>
          </a>
          <div className="card__info__shade">
            <div className="card__info">
              <span className="card__category"> HOTELS</span>
              <h3 className="card__title">
                Discover our hotels that include luxury rooms, suites, and
                poolside cabanas. set on the shoreline of one of the most
                beautiful places in Jordan. It is absolutely a viper lover’s
                hotel
              </h3>
              <div className="services-bttnnss">
                <button className="services-bttnn">
                  {" "}
                  see more &#10095;&#10095;{" "}
                </button>
              </div>
            </div>
          </div>
        </article>

        <article className="card card--3">
          <div className="shade"></div>
          <div className="card__img"></div>
          <a href="#" className="card_link">
            <div className="card__img--hover"></div>
          </a>
          <div className="card__info__shade">
            <div className="card__info">
              <span className="card__category"> ACTIVITIES</span>
              <h3 className="card__title">
                Do Activities and Things to Do in the most fascinating places
                you can visit in Jordan. From the truly wonderful world wonder
                of Petra, to the lowest point of earth in Dead sea
              </h3>
              <div className="services-bttnnss">
                <button className="services-bttnn">
                  {" "}
                  see more &#10095;&#10095;
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>

      <span >---------------------------------------------------------------------</span>

    </div>
  );
};

export default Services;
