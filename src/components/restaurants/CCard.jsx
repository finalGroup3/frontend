import BookingModal from "../bookingModal/BookingModal";
import { useState, useContext, useEffect } from "react";
import { FavoritesContext } from "../favorites/favContext";
// import Button from 'react-bootstrap/Button';
import { ReelContext } from "../../components/reels/ReelsContext";
import vieww from "../../assets/golddd.png";
import favv from "../../assets/ggoolldd.png";
import ReviewsModal from "../reels/reviewsmodal/Reviewsmodal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FaStar } from "react-icons/fa";

const CCard = ({ element, type, restId, hotelId, activId }) => {
  
  const favstate = useContext(FavoritesContext);

  const [modalShow, setModalShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const reelState = useContext(ReelContext);
  const [Reeels, setReeels] = useState([]);
  useEffect(() => {
    async function fetchData() {
      if (type === "restaurant") {
        // console.log(element.id, "iddddddeeeeeeeeeeeeeeeddddd");

        await reelState.getSpecificRestReel(element.id);

        setReeels(reelState.restReels);

        // console.log(Reeels, "reeeelsxxxxxxxxxxxxxxx");
      }
    }

    fetchData();
  }, [type, element.id]);

  // if (type==="hotel") {
  //     reelState.getSpecificHotelReel(element.id);
  //     setReeels(reelState.hotelReels)
  //     console.log(Reeels)

  // }
  // if (type==="activity") {
  //     reelState.getSpecificActivReel(element.id);
  //     setReeels(reelState.activReels)
  //     console.log(Reeels)

  // }
  
  return (
    <>
      <div>
        <div className="item">
          <div className="item-image">
            <img src={element.img} alt="Délicieux Bénédicte" />
          </div>
          <div className="item-text">
            <p className="item-meal-type">{[...Array(element.rating)].map((star, idx) => {
                const currentRating = idx + 1;
                return (
                  <label key={idx}>
                    <input
                      className="hehe"
                      type="radio"
                      name="rating"
                      value={currentRating}
                    />
                    <FaStar
                      className="ssttarr"
                      size={18}
                      color="#FCA41C" 
                    />
                  </label>
                );
              })}</p>
            <button onClick={()=>favstate.AddToFavsDb(element)}>
              <img
                src={favv}
                alt="Review"
                style={{
                  width: "35px",
                  height: "35px",
                  marginLeft: "270px",
                  marginTop: "-44px",
                }}
              />
            </button>
            
            <h4 className="item-title" style={{
  fontFamily: "'Georgia', serif",
  color: "white",  // Gold color with 50% opacity
  textAlign: "center",
  marginBottom: "15px",
  marginTop: "15px",
  fontSize:"18px",
  fontWeight:"bold",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
  letterSpacing: "0.5px",
}}>
  {element.name}
</h4>
            <div className="dessss">
            
            
        <p className="item-body">{element.description}</p>
            </div>

            
            {/* <span>{element.location}</span> */}
            <a
              className="btn-text hover-underline label-2"
              onClick={() => setOpenModal(true)}
            >
              Book now
              
            </a>
            <div className="item-price2">
          {/* <div className="product-links"> */}
          {/* <div className="enlarged-photo-modal"> */}
                <button onClick={() => setModalShow(true)}>
                <FontAwesomeIcon className="playicon22" icon={faCirclePlay} />
                  {/* <p style={{ width: "55px", height: "55px" ,marginLeft: "250px",
                      marginTop: "-1px",}}>review</p> */}
                </button>
              {/* </div> */}
              </div>
            </div>
           
          {/* </div> */}
          <div className="item-price">{element.price}JD</div>
       
          </div>
          

        <ReviewsModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          Reeels={Reeels}
          type={type}
          restId={element.id}
          hotelId={element.id}
          activId={element.id}
        />

        <BookingModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          item={element}
          restId={restId}
          activId={activId}
          hotelId={hotelId}
        />
      </div>
    </>
  );
};

export default CCard;
