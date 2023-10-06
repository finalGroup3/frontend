import BookingModal from "../bookingModal/BookingModal";
import { useState } from "react";

const CCard = ({ element }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div key={element.id}>
        <div className="item">
          <div className="item-image">
            <img src={element.img} alt="Délicieux Bénédicte" />
          </div>
          <div className="item-text">
            <p className="item-meal-type">{element.rating}⭐⭐⭐</p>
            <h2 className="item-title">{element.name}</h2>
            <p className="item-body">{element.description}</p>
            <span>{element.location}</span>
            <a
              className="btn-text hover-underline label-2"
              onClick={() => setOpenModal(true)}
            >
              Book now
            </a>
          </div>
          <div className="item-price">{element.price}</div>
        </div>
        <BookingModal open={openModal} onClose={() => setOpenModal(false)} item={element}/>
      </div>
    </>
  );
};

export default CCard;
