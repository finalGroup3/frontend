import React, { useState, useEffect } from "react";
import axios from "axios";
import cookie from "react-cookies";
import Restaurants from "../Data/DummyData";

export const RestaurantsContext = React.createContext();

export default function RestaurantsList(props) {
  const [list, setlist] = useState([]);
  Restaurants.forEach((item) => {
    setlist({
        name: item.name,
        img: item.img,
        description: item.description,
        location: item.location,
        rating: item.rating,
        price: item.price,
        ownerId: item.ownerId,
        long: item.long,
        lat: item.lat,
      })
  })
 console.log(list,"////////")

  const AddToRestaurantsDb = () => {
    Restaurants.forEach((item) => {
      const oneRestaurant = {
        name: item.name,
        img: item.img,
        description: item.description,
        location: item.location,
        rating: item.rating,
        price: item.price,
        ownerId: item.ownerId,
        long: item.long,
        lat: item.lat,
      };
      const req = async () => {
        try {
          const res = await axios.post(
            `${import.meta.env.VITE_DATABASE_URL}/restaurants`,
            oneRestaurant,
            {
              headers: {
                Authorization: `Bearer ${cookie.load("auth")}`,
              },
            }
          );
          console.log(res.data);
        } catch (error) {
          console.error(error);
        }
      };

      req();
    });
  };

  useEffect(() => {
    // if (list.length > 0) {
      AddToRestaurantsDb();
    // }
  }, []);

//   const updateList = (newItems) => {
//     setlist((prevList) => [...prevList, newItems]);
//   };

 

//   const addOneincompleted = (newIncomplete) => {
//     setlist((prevList) => [...prevList, newIncomplete]);
//   };

//   const deleteOneItem = (newIncomplete) => {
//     let newarray = list.filter((item) => item.id !== newIncomplete);
//     setlist(newarray);
//   };

//   function toggleComplete(id) {
//     const items = list.map((item) => {
//       if (item.id === id) {
//         item.completed = !item.completed;
//       }
//       return item;
//     });
//     setlist(items);
//   }

  const state = {
    list: list,
    // completed: completed,
    // updateList,
    // updatecompleted,
    // addOneincompleted,
    // deleteOneItem,
  };

//   useEffect(() => {
//     const qs = new URLSearchParams(window.location.search);
//     const cookieToken = cookie.load("auth");
//     const token = qs.get("token") || cookieToken || null;
//     validateToken(token);
//   }, []);

  return (
    <RestaurantsContext.Provider value={state}>
      {props.children}
    </RestaurantsContext.Provider>
  );
}