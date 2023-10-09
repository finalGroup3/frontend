// import React, { useState, useContext, useEffect } from "react";
// import { LoginContext } from "../../Auth/login/LogInContext";
// // import Map from '../../map/Map'; 
// // import "./OwnerDashboard.scss"; 

// const OwnerDashboard = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [missing, setMissing] = useState([]);
//   const [showMap, setShowMap] = useState(false);
//   const state = useContext(LoginContext);

//   state.socket?.emit("get-all");

//   useEffect(() => {
//     // ----------------------------------- Notifications----------------------------------------
//     const handleNewNotifications = (payload) => {
//       setNotifications((prev) => [...prev, payload.Details]);
//       setMissing((prev) => {
//         const updatedMissing = [...prev, payload.Details];
//         console.log("============================", updatedMissing);
//         console.log(`missing messages from ${payload.Details},`);
//         return updatedMissing;
//       });
//       state.socket.emit("received", payload);
//     };

//     state.socket.on("new-notifications-msg", handleNewNotifications);

//     return () => {
//       state.socket.off("new-notifications-msg", handleNewNotifications);
//     };
//   }, [missing, notifications, state.socket]);

//   useEffect(() => {
//     state.socket.on("getNotification", (data) => {
//       setNotifications((prev) => [...prev, data]);
//     });

//     return () => {
//       state.socket.off("getNotification");
//     };
//   }, [state.socket]);
//   };

//   return (
//     <>
//     <div className="owner-dashboard-container">
//       <div className="notifications-container">
//         <button
//           className="notifications-btn"
//           onClick={() => setShowNotifications(!showNotifications)}
//         >
//           Notifications
//         </button>
//         {showNotifications && (
//           <div className="notifications-list">
//             {notifications.map((n, i) => (
//               <div key={i} className="notification missing">
//                 <p>
//                   {n.senderName} made a reservation in your restaurant {n.roomId}
//                 </p>
//               </div>
//             ))}
//             {missing.map((n, i) => (
//               <div key={i} className="notification missing">
//                 <p>{n} has made a reservation while you are offline</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
// {/* -------------------------------------------- map ---------------------------------------- */}
//       <div className="map-section">
//         <button
//           className="show-map-btn"
//           onClick={() => {
//             setShowMap(!showMap);
//             handleCreateRestaurant();
//           }}
//         >
//           Create New Restaurant
//         </button>
//         {showMap && <Map />}
//         {showCreateRestaurantMessage && (
//           <div className="create-restaurant-message">
//             Double click on the map and fill out the form correctly to create a new restaurant.
//           </div>
//         )}
//       </div>
//     </div>
//     </>
//     );
// };

// export default OwnerDashboard;


// // .owner-dashboard-container {
// //   display: flex;
// //   flex-direction: column;
// //   padding: 20px;
// //   height: 100vh; /* Set height to 100% of the viewport height */
// // }

// // .notifications-container {
// //   position: relative;
// // }

// // .notifications-btn {
// //   background-color: #FCA41C;
// //   color: #000;
// //   padding: 10px;
// //   border: none;
// //   cursor: pointer;
// //   font-size: 16px;
  
// //   position: fixed; /* Fixed position to keep it in view */
// //   top: 10px; /* Adjust the top position as needed */
// //   right: 10px; /* Adjust the right position as needed */
// // }


// // .notifications-list {
// //   position: absolute;
// //   top: 40px;
// //   right: 0;
// //   background-color: #fff;
// //   border: 1px solid #ddd;
// //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// //   max-height: 200px;
// //   overflow-y: auto;
// //   width: 300px;
// //   z-index: 1;
// // }

// // .notification {
// //   padding: 10px;
// //   border-bottom: 1px solid #e74c3c;
// // }

// // .notification:last-child {
// //   border-bottom: none;
// // }

// // .notification.missing {
// //   color: #e74c3c;
// // }

// // .map-section {
// //   flex: 1;
// //   margin-top: auto; /* Push the map section to the bottom */
// //   margin-left: 20px;
// // }

// // .map-container {
// //   margin-top: 200px;
// //   margin-left: 110px;
// //   // margin-left: auto; /* Move the container to the right */
// //   height: calc(100% - 20px); /* Adjust the height to fill the remaining space */
// //   border: 1px solid #ddd;
// //   border-radius: 8px;
// //   overflow: hidden;
// //   width: 80%; /* Optional: Set a width to limit the container's size */
// // }

// // .create-restaurant-message {
// //   background-color: #FCA41C; /* Yellow background color */
// //   color: #000; /* Black text color */
// //   padding: 10px;
// //   border-radius: 5px;
// //   margin-top: 10px;
// //   font-weight: bold;
// //   text-align: center;
// //   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle box shadow */
// // }
// // button {
// //   background-color: #FCA41C;
// //   color: #000;
// //   padding: 10px;
// //   border: none;
// //   cursor: pointer;
// //   font-size: 16px;
// // }

// // button:hover {
// //   background-color: #FCA41C;
// // }