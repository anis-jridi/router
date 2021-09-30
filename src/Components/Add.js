import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Add = ({ add }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState();
  let handelRating = (x) => setRating(x);

  const handelSubmit = (e) => {
    e.preventDefault();

    add(name, rating, date, image);
    setName("");
    setRating("");
    setDate("");
    setImage("");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        style={{
          borderRadius: "90px",
          backgroundColor: "black",
          color: "#52070a",
          fontSize: "30px",
          marginBottom: "100px",
        }}
        variant="primary"
        onClick={handleShow}
      >
        Add Movie
      </Button>

      <Modal
        style={{
          width: "400px",
          height: "600px",
          position: "absolute",
          left: "40%",
        }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header style={{ backgroundColor: "#E50914" }} closeButton>
          <Modal.Title>Add Your Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body onSubmit={handelSubmit}>
          <p> Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p> Date</p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <p> Image</p>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <p> Rating</p>
          <ReactStars
            count={5}
            size={24}
            isHalf={true}
            onChange={handelRating}
            value={rating}
            activeColor="#ffd700"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              borderRadius: "90px",
              backgroundColor: "black",
              color: "#52070a",
              fontWeight: "bold",
            }}
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick
            style={{
              borderRadius: "90px",
              backgroundColor: "black",
              color: "#52070a",
              fontWeight: "bold",
            }}
            variant="primary"
            onClick={handelSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;