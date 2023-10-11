import { LoginContext } from "../../Auth/login/LogInContext";
import { useState, useContext, useEffect } from "react";
import "./OwnerDashboard.scss";
import superagent from "superagent";
import cookie from "react-cookies";
import { RestaurantsContext } from "../../restaurants/RestaurantContext";
import DashboardMap from "./DashboardMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarXmark,
} from "@fortawesome/free-regular-svg-icons";
import { faHourglassEnd, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import OwnerSideNav from "./OwnerSideNav";
import { When } from "react-if";

const OwnerDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [missing, setMissing] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showCreateRestaurantMessage, setShowCreateRestaurantMessage] =
    useState(false);

  const [restBookings, setrestBookings] = useState([]);
  const [activityBookings, setactivityBookings] = useState([]);
  const [hotelBookings, sethotelBookings] = useState([]);
  // const [AllBookings, setAlllBookings] = useState([]);
  const [component, setComponent] = useState("Dashboard");

  const AllBookings = [];
  const state = useContext(LoginContext);

  //////////////////////////////////////////////////////////////////////////////////////
  //////===================================get=========================================/////
  const FaveState = useContext(RestaurantsContext);

  const userId = state.user.id;
  console.log(userId, "userId");

  //////============get user services==================///////////
  const userRestaurants = FaveState.restaurantsList?.filter((restaurant) => {
    return restaurant.ownerId === userId;
  });
  const userHotels = FaveState.hotelsList?.filter((restaurant) => {
    return restaurant.ownerId === userId;
  });
  const userActivities = FaveState.activitiesList?.filter((restaurant) => {
    return restaurant.ownerId === userId;
  });

  //////============get id for each service==================///////////

  const userRestaurantsIds = userRestaurants?.map((restaurant) => {
    return restaurant.id;
  });
  const userHotelsIds = userHotels?.map((restaurant) => {
    return restaurant.id;
  });
  const userActivitiesIds = userActivities?.map((restaurant) => {
    return restaurant.id;
  });

  // console.log(userRestaurants, "userRestaurants", userHotels, userActivities);

  const getrestBookingsFromDb = (item) => {
    setComponent(item);
    userRestaurantsIds?.map(async (restaurant) => {
      try {
        const response = await superagent
          .get(`${import.meta.env.VITE_DATABASE_URL}/bookingRest/${restaurant}`)
          .set("authorization", `Bearer ${cookie.load("auth")}`);
        const items = response.body;
        setrestBookings(items.bookings);
      } catch (error) {
        console.error(error);
      }
    });
  };

  const getActivityBookingsFromDb = (item) => {
    setComponent(item);
    userActivitiesIds?.map(async (restaurant) => {
      try {
        const response = await superagent
          .get(
            `${import.meta.env.VITE_DATABASE_URL}/bookingActivity/${restaurant}`
          )
          .set("authorization", `Bearer ${cookie.load("auth")}`);
        const items = response.body;
        setactivityBookings(items.bookings);
      } catch (error) {
        console.error(error);
      }
    });
  };

  const gethotelBookingsFromDb = (item) => {
    setComponent(item);
    userHotelsIds?.map(async (restaurant) => {
      try {
        const response = await superagent
          .get(
            `${import.meta.env.VITE_DATABASE_URL}/bookingHotel/${restaurant}`
          )
          .set("authorization", `Bearer ${cookie.load("auth")}`);
        const items = response.body;
        sethotelBookings(items.bookings);
      } catch (error) {
        console.error(error);
      }
    });
  };

  useEffect(() => {
    console.log(state.user.id, "\\\\////");
    getrestBookingsFromDb();
    getActivityBookingsFromDb();
    gethotelBookingsFromDb();
  }, []);

  //////////////////////////////////========================================//////////////////////////////////////////////

  const handleCreateRestaurant = () => {
    setShowCreateRestaurantMessage(true);
    setTimeout(() => {
      setShowCreateRestaurantMessage(false);
    }, 9900000);

    console.log("Create new restaurant");
  };

  state.socket?.emit("get-all");
  // console.log(AllBookings, "AllBookings");
  useEffect(() => {
    state.socket?.on("new-notifications-msg", (payload) => {
      setMissing((prev) => {
        const updatedMissing = [...prev, payload.Details];
        console.log("============================", updatedMissing);
        console.log(`missing messages from ${payload.Details},`);
        return updatedMissing;
      });
      state.socket?.emit("received", payload);
    });
    return () => {
      state.socket?.off("new-notifications-msg");
    };
  }, [missing, state.socket]);

  useEffect(() => {
    state.socket?.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
    return () => {
      state.socket?.off("getNotification");
    };
  }, [state.socket]);


    console.log(restBookings, "restBookings");
    console.log(activityBookings, "activityBookings");
    console.log(hotelBookings, "hotelBookings");

  const currComponent = (component) => {
    setComponent(component);
  };

  return (
    <>
      <div className="ooooo">
        <div className="map-section"></div>
        <div className="inner">
          <nav id="sidebar">
            <OwnerSideNav
              currComponent={currComponent}
              getrestBookingsFromDb={getrestBookingsFromDb}
              getActivityBookingsFromDb={getActivityBookingsFromDb}
              gethotelBookingsFromDb={gethotelBookingsFromDb}
            />
          </nav>
          <When condition={component === "Dashboard"}>
            <main>
              <div className="main__col--1">
                <h2>Owner dashboard</h2>
              </div>
              <div className="main__col--2">
                <div className="box box--1">
                  <div className="box--logo">
                    <FontAwesomeIcon
                      icon={faHourglassEnd}
                      className="iconify"
                    />
                  </div>
                  <div
                    className="box--content"
                    onClick={() => getrestBookingsFromDb()}
                  >
                    <p className="box--title">Active</p>
                  </div>
                </div>
                <div className="box box--2">
                  <div className="box--logo">
                    <FontAwesomeIcon
                      icon={faCalendarXmark}
                      className="iconify"
                    />
                  </div>
                  <div className="box--content">
                    <p className="box--title">Canceled</p>
                  </div>
                </div>
                <div className="box box--3">
                  <div className="box--logo">
                    <FontAwesomeIcon icon={faCircleCheck} className="iconify" />
                  </div>
                  <div className="box--content">
                    <p className="box--title">Past</p>
                  </div>
                </div>
              </div>
              <div className="main__col--3">
                <div className="flex-wrapper">
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart orange">
                      <path
                        className="circle-bg"
                        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle"
                        strokeDasharray="25 , 100"
                        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text x={18} y="20.35" className="percentage">
                        25%
                      </text>
                    </svg>
                  </div>
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart green">
                      <path
                        className="circle-bg"
                        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle"
                        strokeDasharray="10, 100"
                        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text x={18} y="20.35" className="percentage">
                        10%
                      </text>
                    </svg>
                  </div>
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart blue">
                      <path
                        className="circle-bg"
                        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle"
                        strokeDasharray="60, 100"
                        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text x={18} y="20.35" className="percentage">
                        60%
                      </text>
                    </svg>
                  </div>
                </div>
                {/* ------------------------------------- booking details------------------------------------------ */}
              </div>
              <div className="main__col--4">
                <h1>Reservations</h1>
                <div className="simple-bar-chart">
                  <div
                    className="item"
                    style={{ "--clr": "#5EB344", "--val": "45" }}
                  >
                    <div className="label">2018</div>
                    <div className="value">167</div>
                  </div>

                  <div
                    className="item"
                    style={{ "--clr": "#FCB72A", "--val": "59" }}
                  >
                    <div className="label">2019</div>
                    <div className="value">298</div>
                  </div>

                  <div
                    className="item"
                    style={{ "--clr": "#F8821A", "--val": "62" }}
                  >
                    <div className="label">2020</div>
                    <div className="value">306</div>
                  </div>

                  <div
                    className="item"
                    style={{ "--clr": "#E0393E", "--val": "78" }}
                  >
                    <div className="label">2021</div>
                    <div className="value">420</div>
                  </div>

                  <div
                    className="item"
                    style={{ "--clr": "#963D97", "--val": "90" }}
                  >
                    <div className="label">2022</div>
                    <div className="value">531</div>
                  </div>

                  <div
                    className="item"
                    style={{ "--clr": "#069CDB", "--val": "73" }}
                  >
                    <div className="label">2023</div>
                    <div className="value">350</div>
                  </div>
                </div>
              </div>
            </main>
            <aside>
              <p className="notifTitlE">Notifications</p>
              <div className="notifications">
                {notifications.map((n, i) => {
                  console.log(n);
                  return <p key={i}>{n.senderName} has made a reservation</p>;
                })}
                {missing.map((n, i) => {
                  console.log(n);
                  return (
                    <p key={i}>
                      {" "}
                      {n} has made a reservation while you are{" "}
                      <span className="offlineffff">offline</span>
                    </p>
                  );
                })}
              </div>
            </aside>
          </When>
          <When condition={component === "Map"}>
            <div className="mappplaithttttt">
              <DashboardMap />
            </div>
          </When>
          <When condition={component === "Restaurants"}>
            <div className="contacenti">
              <h2 className="titleListLLL">Restaurant reservations</h2>
              <div className="bookingListOwner">
                {restBookings.map((item, idx) => {
                  return (
                    <div key={idx} className="listELEmenTT">
                      <img src={item.img} alt="" className="imglistOwner" />
                      <div>
                        <div className="titleELE">{item.name}</div>
                        <div className="usernameeeee">
                          Reservation for:{" "}
                          <span className="hihello">{item.username}</span>
                        </div>
                      </div>
                      <div className="howmanyyyyyy">
                        <FontAwesomeIcon icon={faUsers} className="iconlaith" />
                        {item.howmany}
                      </div>
                      <div className="daaaatttteeee">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="iconlaith"
                        />
                        {item.date.slice(0, 10)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <aside>
              <p className="notifTitlE">Notifications</p>
              <div className="notifications">
                {notifications.map((n, i) => {
                  console.log(n);
                  return <p key={i}>{n.senderName} has made a reservation</p>;
                })}
                {missing.map((n, i) => {
                  console.log(n);
                  return (
                    <p key={i}>
                      {" "}
                      {n} has made a reservation while you are{" "}
                      <span className="offlineffff">offline</span>
                    </p>
                  );
                })}
              </div>
            </aside>
          </When>
          <When condition={component === "Activties"}>
            <div className="contacenti">
              <h2 className="titleListLLL">Activites reservations</h2>
              <div className="bookingListOwner">
                {activityBookings.map((item, idx) => {
                  return (
                    <div key={idx} className="listELEmenTT">
                      <img src={item.img} alt="" className="imglistOwner" />
                      <div>
                        <div className="titleELE">{item.name}</div>
                        <div className="usernameeeee">
                          Reservation for:{" "}
                          <span className="hihello">{item.username}</span>
                        </div>
                      </div>
                      <div className="howmanyyyyyy">
                        <FontAwesomeIcon icon={faUsers} className="iconlaith" />
                        {item.howmany}
                      </div>
                      <div className="daaaatttteeee">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="iconlaith"
                        />
                        {item.date.slice(0, 10)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <aside>
              <p className="notifTitlE">Notifications</p>
              <div className="notifications">
                {notifications.map((n, i) => {
                  console.log(n);
                  return <p key={i}>{n.senderName} has made a reservation</p>;
                })}
                {missing.map((n, i) => {
                  console.log(n);
                  return (
                    <p key={i}>
                      {" "}
                      {n} has made a reservation while you are{" "}
                      <span className="offlineffff">offline</span>
                    </p>
                  );
                })}
              </div>
            </aside>
          </When>
          <When condition={component === "Hotels"}>
            <div className="contacenti">
              <h2 className="titleListLLL">Hotels reservations</h2>
              <div className="bookingListOwner">
                {hotelBookings.map((item, idx) => {
                  return (
                    <div key={idx} className="listELEmenTT">
                      <img src={item.img} alt="" className="imglistOwner" />
                      <div>
                        <div className="titleELE">{item.name}</div>
                        <div className="usernameeeee">
                          Reservation for:{" "}
                          <span className="hihello">{item.username}</span>
                        </div>
                      </div>
                      <div className="howmanyyyyyy">
                        <FontAwesomeIcon icon={faUsers} className="iconlaith" />
                        {item.howmany}
                      </div>
                      <div className="daaaatttteeee">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="iconlaith"
                        />
                        {item.date.slice(0, 10)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <aside>
              <p className="notifTitlE">Notifications</p>
              <div className="notifications">
                {notifications.map((n, i) => {
                  console.log(n);
                  return <p key={i}>{n.senderName} has made a reservation</p>;
                })}
                {missing.map((n, i) => {
                  console.log(n);
                  return (
                    <p key={i}>
                      {" "}
                      {n} has made a reservation while you are{" "}
                      <span className="offlineffff">offline</span>
                    </p>
                  );
                })}
              </div>
            </aside>
          </When>
        </div>
      </div>
    </>
  );
};
export default OwnerDashboard;
