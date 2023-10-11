import React, { useState, useEffect } from "react";
import axios from "axios";
import cookie from "react-cookies";
import superagent from "superagent";
// import Restaurants from "../Data/DummyData";

export const RestaurantsContext = React.createContext();

export default function RestaurantsList(props) {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [activitiesList, setActivitesList] = useState([]);
  const [hotelsList, setHotelsList] = useState([]);
  console.log(restaurantsList,activitiesList,hotelsList)
  //////////////////////////////////////////////////////////////////////////////////////
  //////===================================get=========================================/////
  const getFromRestaurantsDb = async () => {
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/restaurants`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      setRestaurantsList(items);
    } catch (error) {
      console.error(error);
    }
  };
  const getFromActivitesDb = async () => {
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/activity`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      setActivitesList(items);
      // console.log(items)
    } catch (error) {
      console.error(error);
    }
  };
  const getFromHotelsDb = async () => {
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/hotel`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      // console.log(items)
      setHotelsList(items);
    } catch (error) {
      console.error(error);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////
  //////===================================post=========================================/////

  const AddToRestaurantsDb = (item) => {
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
        const response = await superagent
          .post(`${import.meta.env.VITE_DATABASE_URL}/restaurants`)
          .set("authorization", `Bearer ${cookie.load("auth")}`)
          .send(oneRestaurant);
        if (response.ok) {
          // console.log(response.body);
          getFromRestaurantsDb()
        }
      } catch (error) {
        console.error(error);
      }
    };
    req();
  };
  const AddToActivitiesDb = (item) => {
    const oneActivity = {
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
        const response = await superagent
          .post(`${import.meta.env.VITE_DATABASE_URL}/activity`)
          .set("authorization", `Bearer ${cookie.load("auth")}`)
          .send(oneActivity);
        if (response.ok) {
          // console.log(response.body);
          getFromActivitesDb()
        }
      } catch (error) {
        console.error(error);
      }
    };
    req();
  };
  const AddToHotelsDb = (item) => {
    const oneHotel = {
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
    const req = async (ID) => {
      try {
        const response = await superagent
          .post(`${import.meta.env.VITE_DATABASE_URL}/hotel/${ID}`)
          .set("authorization", `Bearer ${cookie.load("auth")}`)
          .send(oneHotel);
        if (response.ok) {
          console.log(response.body);
          getFromHotelsDb()

        }
      } catch (error) {
        console.error(error);
      }
    };
    req();
  };

  /////////////////////////////////////////////////////////////////////////////////////////
  //////===================================update=========================================/////

  const updateRestaurantsInDb = async (ID) => {
    const founedItem = restaurantsList.filter((item) => item.id === ID);
    console.log(founedItem, "founedItem");
    const updatedItem = {
      name: founedItem.name,
      img: founedItem.img,
      description: founedItem.description,
      location: founedItem.location,
      rating: founedItem.rating,
      price: founedItem.price,
      ownerId: founedItem.ownerId,
      long: founedItem.long,
      lat: founedItem.lat,
    };
    try {
      const response = await superagent
        .put(`${import.meta.env.VITE_DATABASE_URL}/restaurants/${ID}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`)
        .send(updatedItem);
      if (response.ok) {
        console.log(response.body);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const updateActivitiesInDb = async (ID) => {
    const founedItem = activitiesList.filter((item) => item.id === ID);
    console.log(founedItem, "founedItem");
    const updatedItem = {
      name: founedItem.name,
      img: founedItem.img,
      description: founedItem.description,
      location: founedItem.location,
      rating: founedItem.rating,
      price: founedItem.price,
      ownerId: founedItem.ownerId,
      long: founedItem.long,
      lat: founedItem.lat,
    };
    try {
      const response = await superagent
        .put(`${import.meta.env.VITE_DATABASE_URL}/activity/${ID}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`)
        .send(updatedItem);
      if (response.ok) {
        console.log(response.body);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const updateHotelsInDb = async (ID) => {
    const founedItem = hotelsList.filter((item) => item.id === ID);
    console.log(founedItem, "founedItem");
    const updatedItem = {
      name: founedItem.name,
      img: founedItem.img,
      description: founedItem.description,
      location: founedItem.location,
      rating: founedItem.rating,
      price: founedItem.price,
      ownerId: founedItem.ownerId,
      long: founedItem.long,
      lat: founedItem.lat,
    };
    try {
      const response = await superagent
        .put(`${import.meta.env.VITE_DATABASE_URL}/hotel/${ID}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`)
        .send(updatedItem);
      if (response.ok) {
        console.log(response.body);
      }
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(cookie.load("auth"));

  /////////////////////////////////////////////////////////////////////////////////////////
  //////===================================delete=========================================/////

  const deleteRestaurantsInDb = async (id) => {
    try {
      const response = await superagent
        .delete(`${import.meta.env.VITE_DATABASE_URL}/restaurants/${id}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);

      if (response.ok) {
        console.log(response.body);
        getFromRestaurantsDb()
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteActivitysInDb = async (id) => {
    try {
      const response = await superagent
        .delete(`${import.meta.env.VITE_DATABASE_URL}/activity/${id}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);

      if (response.ok) {
        console.log(response.body);
        getFromActivitesDb()
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteHotelInDb = async (id) => {
    try {
      const response = await superagent
        .delete(`${import.meta.env.VITE_DATABASE_URL}/hotel/${id}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);

      if (response.ok) {
        console.log(response.body);
        getFromHotelsDb()
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFromRestaurantsDb();
    getFromActivitesDb();
    getFromHotelsDb();

  }, []);

  const state = {
    restaurantsList: restaurantsList,
    activitiesList:activitiesList,
    hotelsList:hotelsList,
    getFromRestaurantsDb,
    getFromActivitesDb,
    getFromHotelsDb,
    AddToRestaurantsDb,
    AddToActivitiesDb,
    AddToHotelsDb,
    updateRestaurantsInDb,
    updateActivitiesInDb,
    updateHotelsInDb,
    deleteRestaurantsInDb,
    deleteActivitysInDb,
    deleteHotelInDb,
  };

  return (
    <RestaurantsContext.Provider value={state}>
      {props.children}
    </RestaurantsContext.Provider>
  );
}
