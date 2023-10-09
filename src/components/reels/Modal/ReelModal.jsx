import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddBoxIcon from "@mui/icons-material/AddBox";
import axios from "axios";
import cookie from "react-cookies";
import { LoginContext } from "../../Auth/login/LogInContext";
import { FaStar } from "react-icons/fa";

import "./ReelModal.scss";
import Form from "react-bootstrap/Form";

function ReelModal({ getAllReels }) {
  const loginState = useContext(LoginContext);

  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  console.log(rating);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const addToReels = () => {
    const req = `${import.meta.env.VITE_DATABASE_URL}/reelsUpload`;

    const formData = new FormData();
    formData.append("username", loginState.user.username);
    formData.append("description", description);
    formData.append("rating", rating);
    formData.append("userId", loginState.user.id);
    formData.append("video", selectedFile);

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
    <div className="bruhhh">
      <div className="modalbutn" onClick={handleShow}>&#43;</div>
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

export default ReelModal;
