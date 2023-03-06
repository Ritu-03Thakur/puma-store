import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StarIcon from "@mui/icons-material/Star";

const Sales = (props) => {
  return (
    <div className="sales">
      <div className="popular-card">
        <div className="popular-card-content">
          <h3>{props.heading} </h3>
          <h5>{props.shoeType}</h5>
          <div className="popular-price">
            <button>${props.price}</button>
            <span>
              <StarIcon /> {props.rating}
            </span>
          </div>
          <div className="popular-buy">
            <LocalMallIcon sx={{ boxShadow: "1px 1px 2px 1px" }} />
            <button>Buy Now</button>
          </div>
        </div>
        <div className="shoe-img">
          <img src= {props.img} alt="" height={100} width={70} />
        </div>
      </div>
    </div>
  );
};

export default Sales;
