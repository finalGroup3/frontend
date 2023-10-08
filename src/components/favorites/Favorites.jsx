import "./Favorites.scss";
import Card from "./favCard/Card";
import FavHero from "./favHero/FavHero";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../Auth/login/LogInContext";
import superagent from "superagent";
import cookie from "react-cookies";

export const FavoritesContext = React.createContext();

const Favorites = (props) => {
  const LoginState = useContext(LoginContext);
  console.log(LoginState.user.id, "/////////////");

  const [favList, setFavList] = useState([]);
  console.log(favList, "favs from context");

  //////////////////////////////////////////////////////////////////////////////////////
  //////===================================get=========================================/////
  const getFromFavsDb = async () => {
    const userId = LoginState.user.id;
    console.log(userId, "u+++++++++++++");
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/favorite/${userId}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      if (response.ok) {
        const items = response.body;
        console.log(items.favs, "items++++++++");
        // console.log(response.body);
        // console.log(favList,"favList");

        setFavList(items.favs);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////
  //////===================================post=========================================/////

  const AddToFavsDb = (item) => {
    const oneFave = {
      name: item.name,
      img: item.img,
      description: item.description,
      location: item.location,
      rating: item.rating,
      price: item.price,
      userId: LoginState.user.id,
    };

    const req = async () => {
      try {
        const response = await superagent
          .post(`${import.meta.env.VITE_DATABASE_URL}/favorite`)
          .set("authorization", `Bearer ${cookie.load("auth")}`)
          .send(oneFave);
        if (response.ok) {
          console.log(response.body, "addddddddded");
          // console.log(favList,"favList");
        }
      } catch (error) {
        console.error(error);
      }
    };
    req();
  };

  /////////////////////////////////////////////////////////////////////////////////////////
  //////===================================delete=========================================/////

  const deleteFromFavsDb = async (id) => {
    try {
      const response = await superagent
        .delete(`${import.meta.env.VITE_DATABASE_URL}/favorite/${id}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);

      if (response.ok) {
      setFavList((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== id)
      );
      console.log(response.body);
      }
    } catch (error) {
      console.error(error);
    }
  };



  const state = {
    favList: favList,
    getFromFavsDb,
    deleteFromFavsDb,
    AddToFavsDb,
  };

  // useEffect(() => {
  //   console.log(FaveState.getFromFavsDb());
  //   setFavList(FaveState.getFromFavsDb());
  //   console.log(favList);
  // }, []);
  useEffect(() => {
    getFromFavsDb();
  }, []);
  
  return (
    <>
      <Header />
      <div className="favPicture">
        <FavHero />
        <div className="favCategoryyyy">Restaurants</div>
        {/* <button
          onClick={() => {
            getFromFavsDb
          }}
        >
          get from data
        </button> */}
        {favList.map((element) => {
          return <Card key={element.id} element={element} />;
        })}
      </div>
      <Footer />

      <FavoritesContext.Provider value={state}>
        {props.children}
      </FavoritesContext.Provider>
    </>
  );
};

export default Favorites;
