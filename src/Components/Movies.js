import { Movie } from "@mui/icons-material";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import ReactStars from "react-rating-stars-component";

const Movies = ({ list }) => {
  return (
    <div className="mymovie">
      {list.map((el) => (
        <Card
          style={{
            width: "300px",
            hegiht: "400px",
            backgroundColor: "black",
            marginTop: "50px",
            marginBottom: "100px",
          }}
        >
          <Card.Title>
            <ReactStars
              count={5}
              size={24}
              onChange={null}
              edit={false}
              value={el.rating}
            />
          </Card.Title>
          <Card.Body>
            <img className="image" src={el.image} alt="" />
            <Card.Text style={{ color: "white", fontSize: "30px" }}>
              {el.name}
            </Card.Text>
            <Card.Text style={{ color: "white", fontSize: "20px" }}>
              {el.date}
            </Card.Text>
            <Link to={`/description/${el.id}`}>
              <Button>Description</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Movies;
