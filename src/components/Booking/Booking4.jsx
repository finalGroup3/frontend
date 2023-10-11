import "./booking4.scss";
import { useState, useEffect, useContext } from "react";

import Time from "../../assets/clock.svg";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import cookie from "react-cookies";
import superagent from "superagent";
import { LoginContext } from "../Auth/login/LogInContext";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function Booking() {
  const LoginState = useContext(LoginContext);

  const [restaurantsBookings, setRestaurantsBookings] = useState([]);

  const [AllBookings, setAllBookings] = useState([]);

  // console.log(AllBookings);
  //////////////////////////////////////////////////////////////////////////////////////
  //////===================================get=========================================/////

  const getRestaurantsBookingsFromDb = async () => {
    if (LoginState.user.role === "user") {
      if (LoginState.user.id) {
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
      }
    }
  };

  const getAllBookingsFromDb = async () => {
    if (LoginState.user.role === "admin") {
      const userId = LoginState.user.role;
      // console.log(userId, "adminId");
      try {
        const response = await superagent
          .get(`${import.meta.env.VITE_DATABASE_URL}/booking`)
          .set("authorization", `Bearer ${cookie.load("auth")}`);
        const items = response.body;
        setAllBookings(items);
        // console.log(AllBookings, "allbooking");
      } catch (error) {
        console.error(error);
      }
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
        // console.log(response.body);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRestaurantsBookingsFromDb();
    getAllBookingsFromDb();
  }, []);

  return (
    <>
      <Header />
      <div className="overlay">
        <h1>My Booking List</h1>
      </div>
      <div className="center-container">
        <div className="ddd">
          <section className="dark">
            <div className="container py-4">
              {restaurantsBookings.map((element, i) => (
                <div key={element.id}>
                  {i % 2 == 0 ? (
                    <article className="postcard dark blue">
                      <a className="postcard__img_link" href="#">
                        <img
                          className="postcard__img"
                          src={element.img}
                          alt="Image Title"
                        />
                      </a>
                      <div className="postcard__text">
                        <h1 className="postcard__title blue">
                          <p>{element.name}</p>
                        </h1>
                        <div className="postcard__bar"></div>
                        <div className="postcard__subtitle small">
                          <time dateTime="2020-05-25 12:00:00">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            ⭐⭐⭐⭐⭐
                          </time>
                        </div>

                        <div className="postcard__preview-txt">
                          {element.date.toString().split("T")[0]}
                        </div>
                        <ul className="postcard__tagbox">
                          <li>
                            <div className="postcard__preview-name">
                              {element.username.toUpperCase()}
                            </div>
                          </li>
                          <li className="tag__item">
                            <PeopleAltIcon />
                            <div className="text">{element.howmany}</div>
                          </li>
                          <li className="tag__item">
                            <img src={Time} alt="My Icon" />
                            <div className="text">
                              {element.date.toString().split("T")[0]}{" "}
                            </div>
                          </li>

                          <button className="tag__item">
                            <div
                              className="text"
                              onClick={() =>
                                deleteRestaurantsBookings(element.id)
                              }
                            >
                              Cancel
                            </div>
                          </button>
                        </ul>
                      </div>
                    </article>
                  ) : (
                    <article className="postcard dark red">
                      <a className="postcard__img_link" href="#">
                        <img
                          className="postcard__img"
                          src={element.img}
                          alt="Image Title"
                        />
                      </a>
                      <div className="postcard__text">
                        <h1 className="postcard__title red">
                          <p>{element.name}</p>
                        </h1>
                        <div className="postcard__bar" />
                        <div className="postcard__subtitle small">
                          <time dateTime="2020-05-25 12:00:00">
                            <i className="fas fa-calendar-alt mr-2" />
                            ⭐⭐⭐⭐
                          </time>
                        </div>

                        <div className="postcard__preview-txt">
                          {element.date.toString().split("T")[0]}
                        </div>

                        <ul className="postcard__tagbox">
                          <li>
                            <div className="postcard__preview-name">
                              {element.username.toUpperCase()}
                            </div>
                          </li>
                          <li className="tag__item">
                            <PeopleAltIcon />
                            <div className="text">{element.howmany}</div>
                          </li>
                          <li className="tag__item">
                            <img src={Time} alt="My Icon" />
                            <div className="text">
                              {element.date.toString().split("T")[0]}
                            </div>
                          </li>

                          <button className="tag__item">
                            <div
                              className="text"
                              onClick={() =>
                                deleteRestaurantsBookings(element.id)
                              }
                            >
                              Cancel
                            </div>
                          </button>
                        </ul>
                      </div>
                    </article>
                  )}
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
