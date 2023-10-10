import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ReelContext } from "../ReelsContext";
import Reel from "../Reel";
import { useContext, useState,useEffect } from "react";
import cookie from "react-cookies";
import superagent from "superagent";
export default function ReviewsModal(props) {
  // const reelState = useContext(ReelContext);
  const [allReels, setAllReels] = useState([]);
  // if (props.type=="restaurant") {
  //     console.log(props.Id,"iddddddddddd")
  //     // reelState.getSpecificRestReel(props.Id);
  //     // setReeels(reelState.restReels)
  // console.log(props.restId, "props.id");
  // const allreel = allReels;
  // console.log(allreel);
  // setReeels(allreel)
  // }
  // if (props.type=="hotel") {
  //     // reelState.getSpecificHotelReel(props.Id);
  //     // setReeels(reelState.hotelReels)

  // }
  // if (props.type=="activity") {
  //     // reelState.getSpecificActivReel(props.Id);

  // }

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

  const filteredResturant = allReels.filter(
    (item) =>
      item.category === "restaurant" && item.restaurantId == props.restId
  );
  const filteredActivity = allReels.filter(
    (item) => item.category === "activity" && item.activityId == props.restId
  );
  const filteredHotel = allReels.filter(
    (item) => item.category === "hotel" && item.hotelId == props.restId
  );
  
  let filteredreel = [];

  if (props.restId) {
    for (let i = 0; i < filteredResturant.length; i++) {
      filteredreel.push(filteredResturant[i]);
      // console.log(filteredreel, "filteredResturant from modal");
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
 useEffect(() => {
    getAllReels();
  }, []);
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
            <div className="abcontainer">
              <div className="video-container" id="video-container" >
                {filteredreel?.reverse().map((list, i) => (
                  <>
                  {/* <h3 className="reels-title">{list.name}</h3> */}
                  <Reel key={i} item={list} />
                  </>
                ))}
              </div>
            </div>
          </center>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
