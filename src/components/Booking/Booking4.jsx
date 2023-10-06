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
  const [activitiesBookings, setActivitesBookings] = useState([]);
  const [hotelsBookings, setHotelBookings] = useState([]);
  console.log(restaurantsBookings, activitiesBookings, hotelsBookings);
  //////////////////////////////////////////////////////////////////////////////////////
  //////===================================get=========================================/////
  const getRestaurantsBookingsFromDb = async () => {
    const userId=LoginState.user.id
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/bookingRest/${userId}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      setRestaurantsBookings(items);
    } catch (error) {
      console.error(error);
    }
  };
  const getAcitivitesBookingsFromDb = async () => {
    const userId=LoginState.user.id

    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/bookingHotel/${userId}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      setActivitesBookings(items);
    } catch (error) {
      console.error(error);
    }
  };
  const getHotelsBookingsFromDb = async () => {
    const userId=LoginState.user.id

    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/bookingActivity/${userId}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      setHotelBookings(items);
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
        console.log(response.body);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRestaurantsBookingsFromDb();
    getAcitivitesBookingsFromDb();
    getHotelsBookingsFromDb();
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
              {/* <h1 class="h1 text-center" id="pageHeaderTitle">My Booking</h1> */}

              <article class="postcard dark blue">
                <a class="postcard__img_link" href="#">
                  <img class="postcard__img" src={service1} alt="Image Title" />
                </a>
                <div class="postcard__text">
                  <h1 class="postcard__title blue">
                    <a href="#">Restaurants 1</a>
                  </h1>
                  <div class="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i class="fas fa-calendar-alt mr-2"></i>⭐⭐⭐⭐⭐
                    </time>
                  </div>
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">
                    Lorem ipsonsectetur , doloribus eius! Ducimus nemo
                    accusantium maiores velit corrupti tempora reiciendis
                    molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                    quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                    quidem excepturi, illum quos!
                  </div>
                  <ul class="postcard__tagbox">
                    <li class="tag__item">
                      <img src={MyIcon} alt="My Icon" />
                      <div className="text">5 person</div>
                    </li>
                    <li class="tag__item">
                      <img src={Time} alt="My Icon" />
                      <div className="text">22.sep.2023</div>
                    </li>
                    {/* <li class="tag__item play blue">
                                            <a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
                                        </li> */}
                    <button class="tag__item">
                      <div className="text" onClick={deleteRestaurantsBookings}>
                        Cancel
                      </div>
                    </button>
                  </ul>
                </div>
              </article>
              <article class="postcard dark red">
                <a class="postcard__img_link" href="#">
                  <img class="postcard__img" src={service2} alt="Image Title" />
                </a>
                <div class="postcard__text">
                  <h1 class="postcard__title red">
                    <a href="#">Restaurants 2</a>
                  </h1>
                  <div class="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i class="fas fa-calendar-alt mr-2"></i>⭐⭐⭐⭐
                    </time>
                  </div>
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">
                    Lorem ipsum dit Duci reiciendis molestiae repellat vero.
                    Eveniet ipsam adipisci illo iusto quibusdam, sunt neque
                    nulla unde ipsum dolores nobis enim quidem excepturi, illum
                    quos!
                  </div>
                  {/* <ul class="postcard__tagbox">
                                        <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
                                        <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
                                        <li class="tag__item play red">
                                            <a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
                                        </li>
                                    </ul> */}
                  <ul class="postcard__tagbox">
                    <li class="tag__item">
                      <img src={MyIcon} alt="My Icon" />
                      <div className="text">5 person</div>
                    </li>
                    <li class="tag__item">
                      <img src={Time} alt="My Icon" />
                      <div className="text">22.sep.2023</div>
                    </li>
                    {/* <li class="tag__item play blue">
                                            <a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
                                        </li> */}
                    <button class="tag__item">
                      <div className="text">Cancel</div>
                    </button>
                  </ul>
                </div>
              </article>
              <article class="postcard dark green">
                <a class="postcard__img_link" href="#">
                  <img class="postcard__img" src={service3} alt="Image Title" />
                </a>
                <div class="postcard__text">
                  <h1 class="postcard__title green">
                    <a href="#">Restaurants 3</a>
                  </h1>
                  <div class="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i class="fas fa-calendar-alt mr-2"></i>⭐⭐⭐⭐
                    </time>
                  </div>
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">
                    Lorem ipsum dolor sitgiat aspima enim, commodi quia,
                    doloribus eius! Ducimus nemo accusantium maiores velit
                    corrupti tempora reiciendis molestiae repellat vero. Eveniet
                    ipsam adipisci illo iusto quibusdam, sunt neque nulla unde
                    ipsum dolores nobis enim quidem excepturi, illum quos!
                  </div>
                  {/* <ul class="postcard__tagbox">
                                        <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
                                        <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
                                        <li class="tag__item play green">
                                            <a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
                                        </li>
                                    </ul> */}
                  <ul class="postcard__tagbox">
                    <li class="tag__item">
                      <img src={MyIcon} alt="My Icon" />
                      <div className="text">5 person</div>
                    </li>
                    <li class="tag__item">
                      <img src={Time} alt="My Icon" />
                      <div className="text">22.sep.2023</div>
                    </li>
                    {/* <li class="tag__item play blue">
                                            <a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
                                        </li> */}
                    <button class="tag__item">
                      <div className="text">Cancel</div>
                    </button>
                  </ul>
                </div>
              </article>
              <article class="postcard dark yellow">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="https://picsum.photos/501/501"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text">
                  <h1 class="postcard__title yellow">
                    <a href="#">Restaurants 4</a>
                  </h1>
                  <div class="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i class="fas fa-calendar-alt mr-2"></i>⭐⭐⭐⭐⭐
                    </time>
                  </div>
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">
                    Lorem ipsum dolorsperiores commodi quia, doloribus eius!
                    Ducimus nemo accusantium maiores velit corrupti tempora
                    reiciendis molestiae repellat vero. Eveniet ipsam adipisci
                    illo iusto quibusdam, sunt neque nulla unde ipsum dolores
                    nobis enim quidem excepturi, illum quos!
                  </div>
                  {/* <ul class="postcard__tagbox">
                                        <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
                                        <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
                                        <li class="tag__item play yellow">
                                            <a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
                                        </li>
                                    </ul> */}
                  <ul class="postcard__tagbox">
                    <li class="tag__item">
                      <img src={MyIcon} alt="My Icon" />
                      <div className="text">5 person</div>
                    </li>
                    <li class="tag__item">
                      <img src={Time} alt="My Icon" />
                      <div className="text">22.sep.2023</div>
                    </li>
                    {/* <li class="tag__item play blue">
                                            <a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
                                        </li> */}
                    <button class="tag__item">
                      <div className="text">Cancel</div>
                    </button>
                  </ul>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
