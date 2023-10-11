import React, { useState, useContext } from "react";
import cookie from "react-cookies";
import superagent from "superagent";
import { LoginContext } from "../Auth/login/LogInContext";

export const FavoritesContext = React.createContext();

export default function FavoritesProvider(props) {
  const LoginState = useContext(LoginContext);
  
  // console.log(LoginState.user.id, "/////////////");
  
  const [isClick, setClick] = useState(false);
  const [favList, setFavList] = useState([]);

  // console.log(favList,"favs from context");
  //////////////////////////////////////////////////////////////////////////////////////
  //////===================================get=========================================/////
  const getFromFavsDb = async () => {
    const userId=LoginState.user.id
    console.log(userId,"u+++++++++++++")
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/favorite/${userId}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
        if (response.ok) {
          const items = response.body;
        // console.log(items.favs,"items++++++++")
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
    setClick((prevState)=>({
      ...prevState,
      [item.id]: !prevState[item.id]
    }));
    const oneFave = {
      name: item.name,
      img: item.img,
      description: item.description,
      location: item.location,
      rating: item.rating,
      price: item.price,
      userId:LoginState.user.id,
    };

    const req = async () => {
      try {
        const response = await superagent
          .post(`${import.meta.env.VITE_DATABASE_URL}/favorite`)
          .set("authorization", `Bearer ${cookie.load("auth")}`)
          .send(oneFave);
        if (response.ok) {
          console.log(response.body,"addddddddded");
          getFromFavsDb();
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

  const deleteFromFavsDb = async (item) => {

    try {
      const response = await superagent
        .delete(`${import.meta.env.VITE_DATABASE_URL}/favorite/${item}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);

      if (response.ok) {
        console.log(response.body);
      }
      getFromFavsDb();
    } catch (error) {
      console.error(error);
    }
  };


  // useEffect(() => {
  //   getFromFavsDb();
  // }, []);

  const state = {
    favList: favList,
    getFromFavsDb,
    deleteFromFavsDb,
    AddToFavsDb,
    isClick:isClick,
  };

  return (
    <FavoritesContext.Provider value={state}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
