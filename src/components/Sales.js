import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAddItemCart } from "../CartUtil/CartSlice";


const Sales = ({ item : {id , heading ,shoeType , img  , price , rating}}) => {
 const dispatch = useDispatch() ; 

 const handleClick = () => {
  
  dispatch(setAddItemCart({id , heading , shoeType , img , price }))
 }
 
  return (
    <div className="sales" >
      <div className="popular-card">
        <div className="popular-card-content">
          <h2>{heading} </h2>
          <h4>{shoeType}</h4>
          <div className="popular-price">
            <Button
              className="info"
              size="small"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}
            >
              ${price}
            </Button>

            <span>
              <StarIcon /> {rating}
            </span>
          </div>
          <div className="popular-buy">

            <LocalMallIcon
              sx={{ color: "#113f3a" }}
              style={{ boxShadow: "2px 2px 7px rgb(22 82 76)" }}
              onClick = {handleClick}
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
          <img src={img} alt="" className="first" />
        </div>
      </div>
    </div>
  );
};

export default Sales;
