import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import BookingModal from "../../bookingModal/BookingModal";
// import Heart from "react-animated-heart";
import { useState } from "react";

const Card = () => {
  const [openModal, setOpenModal] = useState(false);

  // const [isClick, setClick] = useState(false);

  // const handleSubmit = async (item) => {
  //   try {
  //     setClick((prevState) => ({
  //       ...prevState,
  //       [item.id]: !prevState[item.id],
  //     }));
  //     const serverUrl =` ${process.env.REACT_APP_SERVER_URL}addrestfav`;
  //     const data = {
  //       restname: item.name,
  //       restimage: item.image,
  //       restdescription: item.description,
  //       restaddress: item.address,
  //       restprice:item.price,
  //       restrating: item.rating

  //       };

  //     console.log(data);
  //     axios.post(serverUrl, data).then((res) => {
  //         console.log(res);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="favsssss">
      <ul className="cards">
        <li className="listttt">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <FontAwesomeIcon
                  className="card__thumb"
                  icon={faUtensils}
                  style={{ color: "#001319" }}
                />
                <div className="card__header-text">
                  <h3 className="card__title">Restaurant</h3>
                  <span className="card__status">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
              <div className="containBtNn">
                <button onClick={() => setOpenModal(true)}>Book Now!</button>
                <button className="removeBTnnn">Remove</button>
              </div>
            </div>
          </div>
        </li>
        <li className="listttt">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <FontAwesomeIcon
                  className="card__thumb"
                  icon={faUtensils}
                  style={{ color: "#001319" }}
                />
                <div className="card__header-text">
                  <h3 className="card__title">Restaurant</h3>
                  <span className="card__status">⭐⭐⭐</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
              <div className="containBtNn">
                <button onClick={() => setOpenModal(true)}>Book Now!</button>
                <button className="removeBTnnn">Remove</button>
              </div>
            </div>
          </div>
        </li>
        <li className="listttt">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <FontAwesomeIcon
                  className="card__thumb"
                  icon={faUtensils}
                  style={{ color: "#001319" }}
                />{" "}
                <div className="card__header-text">
                  <h3 className="card__title">Restaurant</h3>
                  <span className="card__status">⭐⭐⭐⭐</span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
              <div className="containBtNn">
                <button onClick={() => setOpenModal(true)}>Book Now!</button>
                <button className="removeBTnnn">Remove</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <BookingModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Card;
