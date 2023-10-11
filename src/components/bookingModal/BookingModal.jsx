import "./BookingModal.scss";
import { LoginContext } from "../Auth/login/LogInContext";
import { useContext, useState, useEffect } from "react";
import superagent from "superagent";
import cookie from "react-cookies";

const BookingModal = ({ open, onClose, item, restId, hotelId, activId }) => {
  const state = useContext(LoginContext);

  const [username, setUsername] = useState("");
  const [howmany, setHowmany] = useState("");
  const [date, setDate] = useState("");
  const [oneUser, setOneUser] = useState("");

  // console.log("item...............", item);
  if(open){

    const getOneUser = async () => {
      try {
        const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/oneuser/${item.ownerId}`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
        const items = response.body;
        if (response.ok) {
          setOneUser(items.username);
        }
        console.log("username :::::::::: ", items.username);
      } catch (error) {
        console.error(error);
      }
    };
    getOneUser()
  }
  const notifyBooking = async (e) => {
    e.preventDefault();
    state.socket?.emit("sendNotification", {
      senderName: state.user.username,
      receiverName: oneUser,
    });

    console.log("restId ", restId, "hotelId ", hotelId, "activId ", activId);

    const object = {
      name: item.name,
      username: username,
      img: item.img,
      howmany: howmany,
      date: date,
    };

    if (restId) {
      object["restaurantId"] = restId;
    }
    if (hotelId) {
      object["hotelId"] = hotelId;
    }
    if (activId) {
      object["activityId"] = activId;
    }

    try {
      const response = await superagent
        .post(`${import.meta.env.VITE_DATABASE_URL}/booking`)
        .set("authorization", `Bearer ${cookie.load("auth")}`)
        .send(object);
      if (response.ok) {
        console.log("oooooooooooooooo", response.body);
      }
    } catch (error) {
      console.error(error);
    }

    onClose();
  };

  // useEffect(() => {
  //   item.ownerId && getOneUser();
  // }, []);

  if (!open) return null;

  return (
    <div onClick={onClose} className="modalOverlay">
      <div onClick={(e) => e.stopPropagation()} className="containerr">
        <img src={item.image} alt="" />
        <div className="modalRight">
          <div className="closeContain" onClick={onClose}>
            <div className="closeBtn">X</div>
          </div>
          <form className="content" onSubmit={notifyBooking}>
            <h1>{item.name}</h1>
            <div className="descriptionionion">{item.description}</div>
            <div className="inputContain">
              <label htmlFor="usernameField" className="usernamelabel label">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                id="usernameField"
                required="required"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="inputContain">
              <label htmlFor="usernameField" className="usernamelabel label">
                For How Many
              </label>
              <input
                type="number"
                placeholder="0"
                id="usernameField"
                required="required"
                onChange={(e) => {
                  setHowmany(e.target.value);
                }}
              />
            </div>
            <div className="inputContain">
              <label htmlFor="usernameField" className="usernamelabel label">
                Date
              </label>
              <input
                type="date"
                placeholder="Date"
                id="usernameField"
                required="required"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <button type="submit">Book Now!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
