import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Card = ({ rated }) => {
  return (
    <div className="card" style={{backgroundColor : `{rated.color}` }}>
      <div className="card-content">
        <h2>{rated.heading}</h2>
        <h4>{rated.shoeType}</h4>
        <div className="card-price">
          <Button
            className="info"
            size="small"
            variant="contained"
            style={{ backgroundColor: "#113f3a" }}
          >
            ${rated.price}
          </Button>

          <span>
            <StarIcon /> {rated.rating}
          </span>
        </div>
        <div className="card-buy">
          <LocalMallIcon sx={{ boxShadow: "1px 1px 2px 1px" }} />
          <Link to="/cartPage">
            <Button
              className="info"
              size="small"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
      <div className="card-img">
        <img src={rated.img} alt="" />
      </div>
    </div>
  );
};

export default Card;
