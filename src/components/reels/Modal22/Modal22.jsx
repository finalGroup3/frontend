import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import cookie from "react-cookies";
import { LoginContext } from "../../Auth/login/LogInContext";
import { FaStar } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import "./Modal22.scss";
import Form from "react-bootstrap/Form";

function Modal22({ getAllReels, restId, hotelId, activId }) {
  const loginState = useContext(LoginContext);

  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [category, setcategory] = useState("");
  console.log(rating);

  // console.log(category);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const addToReels = () => {
    // console.log(restId, hotelId, activId, "///////////");

    const req = `${import.meta.env.VITE_DATABASE_URL}/reelsUpload`;
    // const restaurantId = restId;
    const formData = new FormData();
    formData.append("username", loginState.user.username);
    formData.append("description", description);
    formData.append("rating", rating);
    formData.append("userId", loginState.user.id);
    formData.append("video", selectedFile);
    formData.append("category", category);

    if (restId) {
      formData.append("restaurantId", restId);
    }
    if (hotelId) {
      formData.append("hotelId", hotelId);
    }
    if (activId) {
      formData.append("activityId", activId);
    }

    axios
      .post(req, formData, {
        headers: {
          Authorization: `Bearer ${cookie.load("auth")}`,
          "Content-Type": "multipart/form-data",
        },
      })

      .then((response) => {
        console.log("Upload successful:", response.data);
        handleClose();
        getAllReels();
      })
      .catch((error) => {
        console.error("Error uploading video:", error);
      });
  };

  return (
    <div className="bruhhhssss">
      <div className="modalbutnnnnnn" onClick={handleShow}>
        <FontAwesomeIcon icon={faSquarePlus} className="alaisthebest"/>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <div className="ratingLabel">Rating</div>
              {[...Array(5)].map((star, idx) => {
                const currentRating = idx + 1;
                return (
                  <label key={idx}>
                    <input
                      className="hehe"
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                    />
                    <FaStar
                      className="ssttarr"
                      size={30}
                      color={
                        currentRating <= (hover || rating)
                          ? "#FCA41C"
                          : "#e4e5e9"
                      }
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Video</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
              <label className="cateGGGGGory">Category</label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#/action-1"
                    value="rest"
                    onClick={() => setcategory("restaurant")}
                  >
                    Restaurant
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    value="activity"
                    onClick={() => setcategory("activity")}
                  >
                    Activity
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    value="hotel"
                    onClick={() => setcategory("hotel")}
                  >
                    Hotel
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="bottanoo" variant="primary" onClick={addToReels}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modal22;
