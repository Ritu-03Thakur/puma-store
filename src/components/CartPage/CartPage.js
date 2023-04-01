import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import "./CartPage.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [count, setCount] = useState(1);

  const handleCount = () => {
    if (count <= 1) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="cart-page">
      <div className="cart-heading">
        <h1>Your Cart</h1>
        <Link to="/" className="link">
          <CloseIcon sx={{ color: "#696418" }} />
        </Link>
      </div>


      <div className="item">
        <div className="item-img">
          <img src="./assert/shoe2a.jpeg" alt="" />
        </div>

        <div className="item-details">
          <h3>Zoom Max</h3>
          <span>Running Shoes</span>

          <div className="item-button">
            <Button
              className="info"
              size="small"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}
              onClick={handleCount} > - </Button>
            <Button
              className="info"
              size="small"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}  >
               {count} </Button>
            <Button
              className="info"
              size="small"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}
              onClick={() => {
                setCount(count + 1);
              }}
            >
              
              +
            </Button>
          </div>
        </div>

        <div className="item-price">
          <Button
            className="info"
            size="small"
            variant="contained"
            style={{ backgroundColor: "#113f3a" }}
          >
            $150
          </Button>
          <DeleteIcon />
        </div>
      </div>
      <div className="item">
        <div className="item-img">
          <img src="./assert/shoe2a.jpeg" alt="" />
        </div>

        <div className="item-details">
          <h3>Zoom Max</h3>
          <span>Running Shoes</span>

          <div className="item-button">
            <Button
              className="info"
              size="small"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}
              onClick={handleCount} > - </Button>
            <Button
              className="info"
              size="small"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}  >
               {count} </Button>
            <Button
              className="info"
              size="small"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}
              onClick={() => {
                setCount(count + 1);
              }}
            >
              
              +
            </Button>
          </div>
        </div>

        <div className="item-price">
          <Button
            className="info"
            size="small"
            variant="contained"
            style={{ backgroundColor: "#113f3a" }}
          >
            $150
          </Button>
          <DeleteIcon />
        </div>
      </div>
      <div className="cart-sub-total">
        <div className="total-price">
          <h3>Total</h3>
          <Button
            className="info"
            size="small"
            variant="contained"
            style={{ backgroundColor: "#113f3a" }}
          >
            $150
          </Button>
        </div>

        <Link to="/delAddress" className="link">
          <Button
            className="info"
            size="medium"
            variant="contained"
            style={{ backgroundColor: "#113f3a" }}
          >
            check Out now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
