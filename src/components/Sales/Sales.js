import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StarIcon from "@mui/icons-material/Star";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Sales = (props) => {
  return (
    <div className="sales">
      <div className="popular-card">
        <div className="popular-card-content">
          <h2>{props.heading} </h2>
          <h4>{props.shoeType}</h4>
          <div className="popular-price">
          <Button className="info" size="small" variant="contained"  style={{backgroundColor : "#113f3a" }}  >${props.price}</Button>
          
            <span>
              <StarIcon /> {props.rating}
            </span>
          </div>
          <div className="popular-buy">
            <LocalMallIcon  sx={{ color : "#113f3a"}} style = {{boxShadow : "2px 2px 7px rgb(22 82 76)"}}/>
            <Link to= "/cartPage">
            <Button className="info" size="small" variant="contained"  style={{backgroundColor : "#113f3a" }}  >Buy Now</Button>
            </Link>
          </div>
        </div>
        <div className="shoe-img">
          <img src= {props.img} alt=""  />
        </div>
      </div>
    </div>
  );
};

export default Sales;
