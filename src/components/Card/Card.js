import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StarIcon from "@mui/icons-material/Star";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{props.heading}</h2>
        <h4>{props.shoeType}</h4>
        <div className="card-price">
          <button>${props.price}</button>
          <span>
            <StarIcon /> {props.rating}
          </span>
        </div>
        <div className="card-buy">
          <LocalMallIcon sx={{ boxShadow: "1px 1px 2px 1px" }}  />
          <button>Buy Now</button>
        </div>
      </div>
      <div className="card-img">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

export default Card;
