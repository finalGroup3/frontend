import "./booking4.scss";
import React, { useState, useEffect, useContext } from "react";
import MyIcon from "../../assets/user-regular.svg";
import Time from "../../assets/clock.svg";
import service1 from "../../assets/service-1.jpg";
import service2 from "../../assets/service-2.jpg";
import service3 from "../../assets/service-3.jpg";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import cookie from "react-cookies";
import superagent from "superagent";
import { LoginContext } from "../Auth/login/LogInContext";

export default function Booking() {
  const LoginState = useContext(LoginContext);

  const [restaurantsBookings, setRestaurantsBookings] = useState([]);

  console.log(restaurantsBookings);
  //////////////////////////////////////////////////////////////////////////////////////
  //////===================================get=========================================/////
  const getRestaurantsBookingsFromDb = async () => {
    const userId = LoginState.user.id;
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/bookings/${userId}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      setRestaurantsBookings(items.bookings);
    } catch (error) {
      console.error(error);
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////
  //////===================================delete=========================================/////

  const deleteRestaurantsBookings = async (id) => {
    try {
      const response = await superagent
        .delete(`${import.meta.env.VITE_DATABASE_URL}/booking/${id}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);

      if (response.ok) {
        setRestaurantsBookings((prevBookings) =>
          prevBookings.filter((booking) => booking.id !== id)
        );
        console.log(response.body);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRestaurantsBookingsFromDb();
  }, []);

  return (
    <>
      <Header />
      <div class="overlay">
        <h1>My Booking List</h1>
      </div>
      <div className="center-container">
        <div className="ddd">
          <section class="dark">
            <div class="container py-4">
              {restaurantsBookings.map((element) => (
            <div key={element.id}>

                <article  class="postcard dark blue">
                  <a class="postcard__img_link" href="#">
                    <img
                      class="postcard__img"
                      src={element.img}
                      alt="Image Title"
                      />
                  </a>
                  <div class="postcard__text">
                    <h1 class="postcard__title blue">
                      <a href="#">{element.name}</a>
                    </h1>
                    <div class="postcard__subtitle small">
                      <time datetime="2020-05-25 12:00:00">
                        <i class="fas fa-calendar-alt mr-2"></i>⭐⭐⭐⭐⭐
                      </time>
                    </div>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">{element.date}</div>
                    <ul class="postcard__tagbox">
                      <li class="tag__item">
                        <img src={MyIcon} alt="My Icon" />
                        <div className="text">{element.howmany}</div>
                      </li>
                      <li class="tag__item">
                        <img src={Time} alt="My Icon" />
                        <div className="text">{element.date}</div>
                      </li>
                      {/* <li class="tag__item play blue">
                  <a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
                </li> */}
                      <button class="tag__item">
                        <div
                          className="text"
                          onClick={() => deleteRestaurantsBookings(element.id)}
                          >
                          Cancel
                        </div>
                      </button>
                    </ul>
                  </div>
                </article>
                          </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
