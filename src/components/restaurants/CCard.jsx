import BookingModal from "../bookingModal/BookingModal";
import { useState, useContext, useEffect } from "react";
import { FavoritesContext } from "../favorites/favContext";
// import Button from 'react-bootstrap/Button';
import { ReelContext } from "../../components/reels/ReelsContext";
import vieww from "../../assets/golddd.png";
import favv from "../../assets/ggoolldd.png";
import ReviewsModal from "../reels/reviewsmodal/Reviewsmodal";

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
            <p className="item-meal-type" >{element.rating}⭐⭐⭐</p>
            <button onClick={favstate.AddToFavsDb(element)}>
                    <img
                      src={favv}
                      alt="Review"
                      className={`rotate-on-click ${modalShow ? "rotate" : ""}`}
                      style={{
                        width: "55px",
                        height: "55px",
                        marginLeft: "200px",
                        marginTop: "-40px",
                      }}
                    />
                  </button>
            <h2 className="item-title">{element.name}</h2>
            <p className="item-body">{element.description}</p>
            {/* <span>{element.location}</span> */}
            <a
              className="btn-text hover-underline label-2"
              onClick={() => setOpenModal(true)}
            >
              Book now
            </a>
            <div className="product-links">
                <div className="enlarged-photo-modal">
                  <button onClick={() => setModalShow(true)}>
                    <img
                      src={vieww}
                      alt="Review"
                      style={{ width: "55px", height: "55px" ,marginLeft: "160px",
                      marginTop: "-50px",}}
                    />
                    {/* <p style={{ width: "55px", height: "55px" ,marginLeft: "250px",
                      marginTop: "-1px",}}>review</p> */}
                  </button>
                </div>
                 
                </div>
          </div>
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
