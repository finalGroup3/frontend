import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ReelContext } from "../ReelsContext";
import Reel from "../Reel";
import { useContext, useState } from "react";

export default function ReviewsModal(props) {
  //   const [Reeels, setReeels] = useState([]);
  const reelState = useContext(ReelContext);
  // if (props.type=="restaurant") {
  //     console.log(props.Id,"iddddddddddd")
  //     // reelState.getSpecificRestReel(props.Id);
  //     // setReeels(reelState.restReels)
  console.log(props.restId, "props.id");
  const allreel = reelState.allReels;
  console.log(allreel);
  // setReeels(allreel)
  // }
  // if (props.type=="hotel") {
  //     // reelState.getSpecificHotelReel(props.Id);
  //     // setReeels(reelState.hotelReels)

  // }
  // if (props.type=="activity") {
  //     // reelState.getSpecificActivReel(props.Id);

  // }

  const filteredResturant = reelState.allReels.filter(
    (item) =>
      item.category === "restaurant" && item.restaurantId == props.restId
  );
  const filteredActivity = reelState.allReels.filter(
    (item) => item.category === "activity" && item.activityId == props.restId
  );
  const filteredHotel = reelState.allReels.filter(
    (item) => item.category === "hotel" && item.hotelId == props.restId
  );
  
  let filteredreel = [];

  if (props.restId) {
    for (let i = 0; i < filteredResturant.length; i++) {
      filteredreel.push(filteredResturant[i]);
      console.log(filteredreel, "filteredResturant from modal");
    }
  }
  if (props.hotelId) {
    for (let i = 0; i < filteredActivity.length; i++) {
      filteredreel.push(filteredActivity[i]);
    }
    //  filteredreel.push(filteredActivity);
  }
  if (props.activId) {
    for (let i = 0; i < filteredHotel.length; i++) {
      filteredreel.push(filteredHotel[i]);
    }
    //  filteredreel.push(filteredHotel);
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center className="cccenter">
            <h3 className="reels-title">Reels</h3>
            <div className="abcontainer">
              <div className="video-container" id="video-container">
                {filteredreel?.reverse().map((list, i) => (
                  <Reel key={i} item={list} />
                ))}
              </div>
            </div>
          </center>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
