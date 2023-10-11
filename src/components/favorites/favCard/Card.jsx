import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import BookingModal from "../../bookingModal/BookingModal";
// import Heart from "react-animated-heart";
import { FavoritesContext } from "../favContext";
import { LoginContext } from "../../Auth/login/LogInContext";
import heart from './bookmark (1).png'
import { useState ,useContext} from "react";
import { Rating } from "@mui/material";

const Card = ({element,handelDelete}) => {
  const [openModal, setOpenModal] = useState(false);

  const LoginState = useContext(LoginContext);

  const FaveState = useContext(FavoritesContext);

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
  const handelDeleteed=()=>{
    FaveState.deleteFromFavsDb(element.id)
    FaveState.getFromFavsDb()
    handelDelete()

  }

  return (
    <div className="favsssss">
      <ul className="cards">
        <li className="listttt">
          <div className="card">
            <img src={element.img} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                {/* <FontAwesomeIcon
                  className="card__thumb"
                  icon={faUtensils}
              
                /> */}
                <img className="fav-heart" src={heart} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">{element.name}</h3>
                  <span className="card__status"><Rating name="read-only" value={element.rating} readOnly  /></span>
                </div>
              </div>
              <p className="card__description">{element.description}</p>
              <div className="containBtNn">
                <button onClick={() => setOpenModal(true)}>Book Now!</button>
                <button className="removeBTnnn" onClick={handelDeleteed}>Remove</button>
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
