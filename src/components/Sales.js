import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
//import CartSlice, { increment } from "../CartUtil/CartSlice";
 // import { useDispatch } from "react-redux";

const Sales = ({ item }) => {
//  const dispatch = useDispatch()
 // console.log((CartSlice.increment()));
 
  return (
    <div className="sales" >
      <div className="popular-card">
        <div className="popular-card-content">
          <h2>{item.heading} </h2>
          <h4>{item.shoeType}</h4>
          <div className="popular-price">
            <Button
              className="info"
              size="small"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}
            >
              ${item.price}
            </Button>

            <span>
              <StarIcon /> {item.rating}
            </span>
          </div>
          <div className="popular-buy">

            <LocalMallIcon
              sx={{ color: "#113f3a" }}
              style={{ boxShadow: "2px 2px 7px rgb(22 82 76)" }}
           
            />
            <Link to="/cartPage" className="link">
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
        <div className="shoe-img">
          <img src={item.img} alt="" className="first" />
          {/* <img src= {props.img2} alt="" className="second" /> */}
        </div>
      </div>
    </div>
  );
};

export default Sales;
