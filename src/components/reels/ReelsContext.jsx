import React, { useState, useEffect, useContext } from "react";
import cookie from "react-cookies";
import superagent from "superagent";
import { LoginContext } from "../Auth/login/LogInContext";


export const ReelContext = React.createContext();

const ReelsProvider = (props) => {
  const loginState = useContext(LoginContext);

  const [allReels, setAllReels] = useState([]);
  const [comments, setComments] = useState([]);
  const [restReels, setRestReels] = useState([]);
  const [hotelReels, setHotelReels] = useState([]);
  const [activReels, setActivReels] = useState([]);
  // console.log('aaaaaaaaaaaaaaaaa',comments)

  // console.log(allReels);

  const getAllReels = async () => {
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/reels`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      setAllReels(items);
    } catch (error) {
      console.error(error);
    }
  };

  const AddReel = (item) => {
  
    const oneReel = {
      username: loginState.user.username,
      url: item.url,
      description: item.description,
      rating: item.rating,
      userId: loginState.user.id,
     
    };
    const req = async () => {
      try {
        const response = await superagent
          .post(`${import.meta.env.VITE_DATABASE_URL}/reelsUpload`)
          .set("authorization", `Bearer ${cookie.load("auth")}`)
          .send(oneReel);
        if (response.ok) {
          // console.log(response.body);
          setAllReels([...allReels, response.body]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    req();
  };

  const deleteReel = async (id) => {
    try {
      const response = await superagent
        .delete(`${import.meta.env.VITE_DATABASE_URL}/reels/${id}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);

      if (response.ok) {
        console.log(response.body);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getSpecificRestReel = async (id) => {
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/reelsRestaurant/${id}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
        if (response.ok) {
        const items = response.body.reels;
        // console.log(items,"ressssssspons")
        // console.log(response.body);
        setRestReels(items);
        // console.log(restReels,"afterrespons")
      }

      // return items
    } catch (error) {
      console.error(error);
    }
  };

  const getSpecificHotelReel = async (id) => {
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/reelsHotel/${id}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body.reels;
      // console.log(items,"ressssssspons")
      setHotelReels(items);
    } catch (error) {
      console.error(error);
    }
  };

  const getSpecificActivReel = async (id) => {
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/reelsActivity/${id}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body.reels;
      // console.log(items,"ressssssspons")

      setActivReels(items);
    } catch (error) {
      console.error(error);
    }
  };

  //-----------------------------COMMENTS---------------------------------------------

  const getComments = async (id) => {
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/comments/${id}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      setComments(items.comments);
      // console.log('all comments oooooooooooooooooooooooo',items)
    } catch (error) {
      console.error(error);
    }
  };

  const AddComment = (content, reelId) => {
    const oneComment = {
      content: content,
      date:
        `${new Date(Date.now()).getHours()}` +
        ":" +
        `${new Date(Date.now()).getMinutes()}`,
      userId: loginState.id,
      reelId: reelId,
    };
    const req = async () => {
      try {
        const response = await superagent
          .post(`${import.meta.env.VITE_DATABASE_URL}/comments`)
          .set("authorization", `Bearer ${cookie.load("auth")}`)
          .send(oneComment);
        if (response.ok) {
          // console.log(response.body);
          setComments([...comments, response.body]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    req();
  };

  const deleteComment = async (id) => {
    try {
      const response = await superagent
        .delete(`${import.meta.env.VITE_DATABASE_URL}/comments/${id}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);

      if (response.ok) {
        // console.log(response.body);
      }
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(allReels,"afterrespons")
  // console.log(restReels,"afterrespons")


  useEffect(() => {
    getAllReels();
  }, []);

  const state = {
    allReels: allReels,
    getAllReels: getAllReels,
    AddReel: AddReel,
    deleteReel: deleteReel,
    comments: comments,
    getComments: getComments,
    AddComment: AddComment,
    deleteComment: deleteComment,
    restReels: restReels,
    hotelReels: hotelReels,
    activReels: activReels,
    getSpecificRestReel: getSpecificRestReel,
    getSpecificHotelReel: getSpecificHotelReel,
    getSpecificActivReel: getSpecificActivReel,
  };

  return (
    <ReelContext.Provider value={state}>{props.children}</ReelContext.Provider>
  );
};

export default ReelsProvider;
