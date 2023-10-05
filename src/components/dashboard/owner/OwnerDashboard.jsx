// import "./OwnerDashboard.scss";
// import { Restaurants,owners ,Hotels,activities} from "../../Data/DummyData";
// import axios from "axios";
// import cookie from "react-cookies";
import { LoginContext } from "../../Auth/login/LogInContext";
import { useState, useContext, useEffect } from "react";

const OwnerDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [missing, setMissing] = useState([]);
  const state = useContext(LoginContext);

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

  // const arr = [];
  // for (let i = 0; i < missing.length; i++) {
  //   for (let j = 0; j < missing.length; j++) {
  //     if (i != j && missing[i] != missing[j]) {
  //       arr.push(missing.splice(j,1))
  //     }
  //   }
  // }

  return (
    <div className="notifications">
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
  );
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
};

export default OwnerDashboard;
