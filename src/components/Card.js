import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setAddItemCart } from "../CartUtil/CartSlice";



const label = { inputProps: { "arial-label": "Checkbox demo" } } ; 


const Card = ({ rated : {id , heading ,shoeType , img , img2 , price , rating} }) => {
  const dispatch = useDispatch() ; 

 const handleClick = () => {
  
  dispatch(setAddItemCart({id , heading , shoeType , img , price }))
 }
  
  
  
  return (
    <div className="card" style={{ backgroundColor: `{rated.color}` }}>
      <span
        style={{ display: "flex", padding: "5px", justifyContent: "flex-end" }}
      >
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite style={{ color: "#113f3a" }} />}
        />
      </span>
      <div className="card-content">
        <h2>{heading}</h2>
        <h4>{shoeType}</h4>
        <div className="card-price">
          <Button
            className="info"
            size="small"
            variant="contained"
            style={{ backgroundColor: "#113f3a" }}
          >
            ${price}
          </Button>

          <span>
            <StarIcon sx={{ color: "#a3bf37" }} /> {rating}
          </span>
        </div>
        <div className="card-buy">
          <LocalMallIcon
            sx={{ boxShadow: "1px 1px 2px 1px", color: "#353838" }} 
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
      <div className="card-img">
        <img src={img} alt="" className="first" />
        <img src={img2} alt="" className="second" />
      </div>
    </div>
  );
};

export default Card;
