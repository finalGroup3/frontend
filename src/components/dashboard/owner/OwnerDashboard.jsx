import { LoginContext } from "../../Auth/login/LogInContext";
import { useState, useContext, useEffect } from "react";
import Map from '../../map/Map'; 
import "./OwnerDashboard.scss"; 

const OwnerDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [missing, setMissing] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showCreateRestaurantMessage, setShowCreateRestaurantMessage] = useState(false);
  const state = useContext(LoginContext);
  const handleCreateRestaurant = () => {
    setShowCreateRestaurantMessage(true);
    setTimeout(() => {
      setShowCreateRestaurantMessage(false);
    }, 9900000); 

    console.log("Create new restaurant");
  };


  state.socket?.emit("get-all");

  useEffect(() => {
    state.socket.on("new-notifications-msg", (payload) => {
      setMissing((prev) => {
        const updatedMissing = [...prev, payload.Details];
        console.log("============================", updatedMissing);
        console.log(`missing messages from ${payload.Details},`);
        return updatedMissing;
      });
      state.socket.emit("received", payload);
    });
    return () => {
      state.socket.off("new-notifications-msg");
    };
  }, [missing, state.socket]);

  useEffect(() => {
    state.socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
    return () => {
      state.socket.off("getNotification");
    };
  }, [state.socket]);
  return (
    <>
    <div className="ooooo">
    <div className="map-section">
        
        </div>
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
              <span className="iconify" data-inline="false" data-icon="fluent:people-32-filled" style={{"color":"#ffffff","font-size":"40px"}} />
            </div>
            <div className="box--content">
              <p className="box--title">Bookings</p>
            </div>
          </div>
          <div className="box box--2">
            <div className="box--logo">
              <span className="iconify" data-inline="false" data-icon="clarity:group-line" style={{"color":"#ffffff","font-size":"40px"}} />
            </div>
            <div className="box--content">
              <p className="box--title">Cancellations</p>
            </div>
          </div>
          <div className="box box--3">
            <div className="box--logo">
              <span className="iconify" data-inline="false" data-icon="ant-design:cloud-download-outlined" style={{"color":"#ffffff","font-size":"40px"}} />
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
        <path className="circle-bg" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path className="circle" strokeDasharray="25 , 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text x={18} y="20.35" className="percentage">25%</text>
      </svg>
    </div>
    <div className="single-chart">
      <svg viewBox="0 0 36 36" className="circular-chart green">
        <path className="circle-bg" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path className="circle" strokeDasharray="15, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text x={18} y="20.35" className="percentage">15%</text>
      </svg>
    </div>
    <div className="single-chart">
      <svg viewBox="0 0 36 36" className="circular-chart blue">
        <path className="circle-bg" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path className="circle" strokeDasharray="60, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text x={18} y="20.35" className="percentage">60%</text>
      </svg>
    </div>
  </div>
            
          
        </div>
      </main>
      <aside>
        
      <div className="notifications">
      <p>Notifications</p>
      {notifications.map((n, i) => {
        console.log(n);
        return (
          <p key={i}>
            {n.senderName} made a reservation in your restaurant {n.roomId}
          </p>
        );
      })}
      {missing.map((n, i) => {
        console.log(n);
        return <p key={i}> {n} has made a reservation while you are offline</p>;
      })}
    </div>
      </aside>
    </div>
    </div>
    </>
  );
};
export default OwnerDashboard;


//   const AddToRestaurantsDb = () => {
//     Restaurants.forEach((item) => {
//     const oneRestaurant = {
//       name: item.name,
//       img: item.img,
//       description: item.description,
//       location: item.location,
//       rating: item.rating,
//       price: item.price,
//       ownerId: item.ownerId,
//       // long: item.long,
//       // lat: item.lat,
//     };
//     const req = async () => {
//       try {
//         const res = await axios.post(
//           `${import.meta.env.VITE_DATABASE_URL}/restaurants`,
//           oneRestaurant
//         );
//         console.log(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     req();
//     });
//   };
//   const AddToHotelsDb = () => {
//     Hotels.forEach((item) => {
//     const oneRestaurant = {
//       name: item.name,
//       img: item.img,
//       description: item.description,
//       location: item.location,
//       rating: item.rating,
//       price: item.price,
//       ownerId: item.ownerId,
//       // long: item.long,
//       // lat: item.lat,
//     };
//     const req = async () => {
//       try {
//         const res = await axios.post(
//           `${import.meta.env.VITE_DATABASE_URL}/hotel`,
//           oneRestaurant
//         );
//         console.log(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     req();
//     });
//   }; const AddToActivitessDb = () => {
//     activities.forEach((item) => {
//     const oneRestaurant = {
//       name: item.name,
//       img: item.img,
//       description: item.description,
//       location: item.location,
//       rating: item.rating,
//       price: item.price,
//       ownerId: item.ownerId,
//       // long: item.long,
//       // lat: item.lat,
//     };
//     const req = async () => {
//       try {
//         const res = await axios.post(
//           `${import.meta.env.VITE_DATABASE_URL}/activity`,
//           oneRestaurant
//         );
//         console.log(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     req();
//     });
//   };
//   const AddToUsers = () => {
//     owners.forEach((item) => {
//     const oneRestaurant = {
//       username: item.username,
//       password: "123",
//       role: "owner",
//          };
//     const req = async () => {
//       try {
//         const res = await axios.post(
//           `${import.meta.env.VITE_DATABASE_URL}/signup`,
//           oneRestaurant
//         );
//         console.log(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     req();
//     });
//   };
//   return (
//     <>
//       <div className="owner">OwnerDashboard</div>;
//       <button onClick={AddToUsers}>add users</button>
//       <button onClick={AddToRestaurantsDb}>add restaurants </button>
//       <button onClick={AddToHotelsDb}>add Hotels</button>
//       <button onClick={AddToActivitessDb}>add Activities</button>
//     </>
//   );