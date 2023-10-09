import "./BookingModal.scss";
import { LoginContext } from "../Auth/login/LogInContext";
import { useContext, useState } from "react";
import superagent from "superagent";
import cookie from "react-cookies";

const BookingModal = ({ open, onClose, item }) => {
  const [username, setUsername] = useState("");
  const [howmany, setHowmany] = useState("");
  const [date, setDate] = useState("");
  const state = useContext(LoginContext);

  if (!open) return null;

  const notifyBooking = async (e) => {
    e.preventDefault();
    state.socket?.emit("sendNotification", {
      senderName: state.user.username,
      receiverName: "hatem",
    });

    const object = {
      name: item.name,
      username: username,
      img: item.img,
      howmany: howmany,
      date: date,
    };

    try {
      const response = await superagent
        .post(`${import.meta.env.VITE_DATABASE_URL}/booking`)
        .set("authorization", `Bearer ${cookie.load("auth")}`)
        .send(object);
      if (response.ok) {
        console.log(response.body);
      }
    } catch (error) {
      console.error(error);
    }

    onClose();
  };

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
