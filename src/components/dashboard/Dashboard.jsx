import "./dashboard.css";
// import "./user.css";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import image from "./avatar1.jpg";
import image2 from "./avatar2.png";
import image3 from "./avatar3.jpg";
import image4 from "./avatar4.jpg";
import { Users } from "../Data/DummyData";
import { Restaurants } from "../Data/DummyData";
import { Hotels } from "../Data/DummyData";
import { activities } from "../Data/DummyData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Dashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isRestaurantsOpen, setIsRistaurantsOpen] = useState(false);
  const [isHotelsOpen, setIsHotelsOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

  // console.log(Users);
  const openChat = () => {
    setIsChatOpen(true);
    setIsUsersOpen(false);
    setIsRistaurantsOpen(false);
    setIsHotelsOpen(false);
    setIsActivitiesOpen(false);
  };

  const openUsers = () => {
    setIsChatOpen(false);
    setIsUsersOpen(true);
    setIsRistaurantsOpen(false);
    setIsHotelsOpen(false);
    setIsActivitiesOpen(false);
  };

  const openRestaurantse = () => {
    setIsChatOpen(false);
    setIsUsersOpen(false);
    setIsRistaurantsOpen(true);
    setIsHotelsOpen(false);
    setIsActivitiesOpen(false);
  };
  const openHotels = () => {
    setIsChatOpen(false);
    setIsUsersOpen(false);
    setIsRistaurantsOpen(false);
    setIsHotelsOpen(true);
    setIsActivitiesOpen(false);
  };
  const openActivities = () => {
    setIsChatOpen(false);
    setIsUsersOpen(false);
    setIsRistaurantsOpen(false);
    setIsHotelsOpen(false);
    setIsActivitiesOpen(true);
  };
  const handelDelete = (Id) => {

  }
    return (
    <>
      <div>
        <div className="main-dashboard">
          <div className="profile-navbar">
            <div className="profile-admin">
              <h1 className="profile--titel-admin">Wanerlust</h1>
              <img src={image} alt="avatar1" className="profile-image" />
              <h4 className="profile-Name-admin">Amro</h4>
              {/* <h4 className="profile-Role-admin">Admin</h4> */}
            </div>
            <div className="navigation-admin-Home">
              <FontAwesomeIcon icon={faHouse} />
              <h3>Home</h3>
            </div>
            <div className="navigation-admin">
              <h5>Navigation</h5>
            </div>
            <div className="navigation-admin-dashboard">
              <FontAwesomeIcon icon={faChartPie} />
              <h3>Dashboard</h3>
            </div>
            <div className="apps-admin">
              <h5>Apps</h5>
            </div>
            <div className="admin-chat" onClick={openChat}>
              <FontAwesomeIcon icon={faMessage} />
              <h3>chat</h3>
            </div>
            <div className="admin-user" onClick={openUsers}>
              <FontAwesomeIcon icon={faAddressBook} />
              <h3>users</h3>
            </div>
            <div className="admin-restaurants" onClick={openRestaurantse}>
              <FontAwesomeIcon icon={faMugSaucer} />

              <h3>restaurants</h3>
            </div>
            <div className="admin-activitys" onClick={openHotels}>
              <FontAwesomeIcon icon={faPersonSwimming} />
              <h3>activtys</h3>
            </div>
            <div className="admin-hotels" onClick={openActivities}>
              <FontAwesomeIcon icon={faBed} />
              <h3>hotels</h3>
            </div>
          </div>

          {isChatOpen && (
            <div className="chat-container">
              <div className="chat-navbar">
                <div className="chat-title">
                  <FontAwesomeIcon icon={faEllipsis} />
                  <span>Chat</span>
                </div>
                <input
                  className="chat-search-bar"
                  type="text"
                  placeholder="Search..."
                />
                <div className="chat-bell">
                  <FontAwesomeIcon icon={faBell} />
                </div>
                <img src={image} alt="avatar1" className="chat-avatar" />
              </div>
              <div className="chat-side-bar-profile">
                <img src={image} alt="avatar1" className="chat-avatar" />
                <h4 className="chat-profile-Name-admin">Amro</h4>
              </div>
              <div className="chat-sidebar">
                <div className="one-peson-chat">
                  <img
                    src={image2}
                    alt="avatar4"
                    className="chat-avatar-one-person"
                  />
                  <div className="one-Person-name">
                    <span>Margaret Clayton</span>
                  </div>
                  <div className="chat-time-one-person">
                    <span> 05 min </span>
                  </div>
                </div>
                <div className="one-peson-chat">
                  <img
                    src={image3}
                    alt="avatar2"
                    className="chat-avatar-one-person"
                  />
                  <div className="one-Person-name">
                    <span>Margaret Clayton</span>
                  </div>
                  <div className="chat-time-one-person">
                    <span> 05 min </span>
                  </div>
                </div>
                <div className="one-peson-chat">
                  <img
                    src={image4}
                    alt="avatar3"
                    className="chat-avatar-one-person"
                  />
                  <div className="one-Person-name">
                    <span>Margaret Clayton</span>
                  </div>
                  <div className="chat-time-one-person">
                    <span> 05 min </span>
                  </div>
                </div>
              </div>
              <div className="chat-body">
                <div className="chat-body-head">
                  <span> Margaret Clayton </span>
                  <span>Active</span>
                </div>
                <div className="chat-body-main-space" />
                <div className="chat-writing-box">
                  <textarea
                    placeholder="Type your message..."
                    className="chat-writing-input"
                    defaultValue={""}
                  />
                  <button className="chat-writing-button">Send</button>
                </div>
              </div>
            </div>
          )}

          {isUsersOpen && (
            <div className="table-container">
              <div className="table-title">
                <h3>Users Table</h3>
              </div>
              <table className="table-fill">
                <thead>
                  <tr>
                    <th className="text-left">User ID</th>
                    <th className="text-left">Username</th>
                    <th className="text-left">Status</th>
                    <th className="text-left">delete</th>
                  </tr>
                </thead>
                <tbody className="table-hover">
                  {Users.map((user) => (
                    <tr key={user.id}>
                      <td className="text-left">{user.id}</td>
                      <td className="text-left">{user.username}</td>
                      <td className="text-left">{user.status}</td>
                      <td className="text-left">
                        {" "}
                        <button onClick={() => handelDelete(user.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {isRestaurantsOpen && (
            <div className="table-container">
              <div className="table-title">
                <h3>Restaurants Table</h3>
              </div>
              <table className="table-fill">
                <thead>
                  <tr>
                    <th className="text-left">Restaurant Name</th>
                    <th className="text-left">Owner ID</th>
                    <th className="text-left">Rating</th>
                    <th className="text-left">Location</th>
                    <th className="text-left">delete</th>

                  </tr>
                </thead>
                <tbody className="table-hover">
                  {Restaurants.map((restaurant) => (
                    <tr key={restaurant.id}>
                      <td className="text-left">{restaurant.name}</td>
                      <td className="text-left">{restaurant.ownerId}</td>
                      <td className="text-left">{restaurant.rating}</td>
                      <td className="text-left">{restaurant.location}</td>
                      <td className="text-left">
                        {" "}
                        <button onClick={() => handelDelete(user.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {isHotelsOpen && (
            <div className="table-container">
              <div className="table-title">
                <h3>Hotels Table</h3>
              </div>
              <table className="table-fill">
                <thead>
                  <tr>
                    <th className="text-left">Restaurant Name</th>
                    <th className="text-left">Owner ID</th>
                    <th className="text-left">Rating</th>
                    <th className="text-left">Location</th>
                    <th className="text-left">delete</th>

                  </tr>
                </thead>
                <tbody className="table-hover">
                  {Hotels.map((hotel) => (
                    <tr key={hotel.id}>
                      <td className="text-left">{hotel.name}</td>
                      <td className="text-left">{hotel.ownerId}</td>
                      <td className="text-left">{hotel.rating}</td>
                      <td className="text-left">{hotel.location}</td>
                      <td className="text-left">
                        {" "}
                        <button onClick={() => handelDelete(user.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {isActivitiesOpen && (
            <div className="table-container">
              <div className="table-title">
                <h3>Activities Table</h3>
              </div>
              <table className="table-fill">
                <thead>
                  <tr>
                    <th className="text-left">Restaurant Name</th>
                    <th className="text-left">Owner ID</th>
                    <th className="text-left">Rating</th>
                    <th className="text-left">Location</th>
                    <th className="text-left">delete</th>

                  </tr>
                </thead>
                <tbody className="table-hover">
                  {activities.map((activity) => (
                    <tr key={activity.id}>
                      <td className="text-left">{activity.name}</td>
                      <td className="text-left">{activity.ownerId}</td>
                      <td className="text-left">{activity.rating}</td>
                      <td className="text-left">{activity.location}</td>
                      <td className="text-left">
                        {" "}
                        <button onClick={() => handelDelete(user.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
