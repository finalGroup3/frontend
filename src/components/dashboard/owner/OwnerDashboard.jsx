import { LoginContext } from "../../Auth/login/LogInContext";
import { useState, useContext, useEffect } from "react";
import Map from "../../map/Map";
import "./OwnerDashboard.scss";
import superagent from "superagent";
import cookie from "react-cookies";

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

  const AllBookings = [];
  const state = useContext(LoginContext);

  //////////////////////////////////////////////////////////////////////////////////////
  //////===================================get=========================================/////
  const getrestBookingsFromDb = async () => {
    const userId = state.user.id;
    console.log(userId, "**********************************");
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/bookingRest/${userId}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      setrestBookings(items);
      console.log(items, "restBookings");
    } catch (error) {
      console.error(error);
    }
  };
  // const getrAllBookingsFromDb = async () => {
  //   const userId = state.user.id;
  //   console.log(userId, "**********************************");
  //   try {
  //     const response = await superagent
  //       .get(`${import.meta.env.VITE_DATABASE_URL}/booking`)
  //       .set("authorization", `Bearer ${cookie.load("auth")}`);
  //     const items = response.body;
  //     setrestBookings(items);
  //     console.log(items, "restBookings");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const getActivityBookingsFromDb = async () => {
    const userId = state.user.id;
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/bookingActivity/${userId}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      setactivityBookings(items);
      console.log(items, "activityBookings");
    } catch (error) {
      console.error(error);
    }
  };
  const gethotelBookingsFromDb = async () => {
    const userId = state.user.id;
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/bookingHotel/${userId}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      sethotelBookings(items);

      console.log(items, "hotelBookings");
    } catch (error) {
      console.error(error);
    }
  };
  const getAllBookingsforOwner = () => {
    console.log(state.user.id, "\\\\////");
    getrestBookingsFromDb();
    getActivityBookingsFromDb();
    gethotelBookingsFromDb();
  };
  useEffect(() => {
    console.log(state.user.id, "\\\\////");
    getrestBookingsFromDb();
    getActivityBookingsFromDb();
    gethotelBookingsFromDb();
  }, []);
  for (let i = 0; i < restBookings.length; i++) {
    AllBookings.push(restBookings[i]);
  }
  for (let i = 0; i < activityBookings.length; i++) {
    AllBookings.push(activityBookings[i]);
  }
  for (let i = 0; i < hotelBookings.length; i++) {
    AllBookings.push(hotelBookings[i]);
  }
  console.log(AllBookings, "AllBookings");
  const handleCreateRestaurant = () => {
    setShowCreateRestaurantMessage(true);
    setTimeout(() => {
      setShowCreateRestaurantMessage(false);
    }, 9900000);

    console.log("Create new restaurant");
  };

  state.socket?.emit("get-all");
  console.log(AllBookings, "AllBookings");
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
  return (
    <>
      <div className="ooooo">
        <div className="map-section"></div>
        <div className="inner">
          <nav id="sidebar">
            <div className="sidebar__container--logo">
              <div className="logo">W</div>
              <h1>Wanderlust</h1>
            </div>
            <div className="sidebar-links">
              <button className="sidebar-btn">Home</button>
              <button
                className="sidebar-btn"
                onClick={() => {
                  setShowMap(!showMap);
                  handleCreateRestaurant();
                }}
              >
                Create Service
              </button>
              {showMap && <Map />}

              <button className="sidebar-btn">Category</button>
              <button className="sidebar-btn">Raport</button>
              <button className="sidebar-btn">Stock</button>
              <button className="sidebar-btn">Financial</button>
              <button className="sidebar-btn">About us</button>
            </div>
          </nav>

          <div className="menu">
            <div className="line" />
          </div>
          <main>
            <div className="main__col--1">
              <h2>Owner dashboard</h2>
            </div>
            <div className="main__col--2">
              <div className="box box--1">
                <div className="box--logo">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="fluent:people-32-filled"
                    style={{ color: "#ffffff", "font-size": "40px" }}
                  />
                </div>
                <div
                  className="box--content"
                  onClick={() => getAllBookingsforOwner}
                >
                  <p className="box--title">Bookings</p>
                </div>
              </div>
              <div className="box box--2">
                <div className="box--logo">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="clarity:group-line"
                    style={{ color: "#ffffff", "font-size": "40px" }}
                  />
                </div>
                <div className="box--content">
                  <p className="box--title">Cancellations</p>
                </div>
              </div>
              <div className="box box--3">
                <div className="box--logo">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="ant-design:cloud-download-outlined"
                    style={{ color: "#ffffff", "font-size": "40px" }}
                  />
                </div>
                <div className="box--content">
                  <p className="box--title">Views</p>
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
                      strokeDasharray="15, 100"
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x={18} y="20.35" className="percentage">
                      15%
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
          </main>
          <aside>
            <div className="notifications">
              <p>Notifications</p>
              {notifications.map((n, i) => {
                console.log(n);
                return (
                  <p key={i}>
                    {n.senderName} made a reservation in your restaurant{" "}
                    {n.roomId}
                  </p>
                );
              })}
              {missing.map((n, i) => {
                console.log(n);
                return (
                  <p key={i}>
                    {" "}
                    {n} has made a reservation while you are offline
                  </p>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
export default OwnerDashboard;
