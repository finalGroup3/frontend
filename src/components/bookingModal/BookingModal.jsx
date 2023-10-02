import "./BookingModal.scss";
import modalImage from "../../assets/modalimage.avif";

const BookingModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="modalOverlay">
      <div onClick={(e) => e.stopPropagation()} className="containerr">
        <img src={modalImage} alt="" />
        <div className="modalRight">
          <div className="closeContain" onClick={onClose}>
            <div className="closeBtn">X</div>
          </div>
          <div className="content">
            <h1>Restaurant</h1>
            <div className="inputContain">
              <label htmlFor="usernameField" className="usernamelabel label">
                Reservation for
              </label>
              <input
                type="text"
                placeholder="Name"
                id="usernameField"
                required="required"
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
              />
            </div>
            <button>Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
