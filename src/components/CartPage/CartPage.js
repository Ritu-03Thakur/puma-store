import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./CartPage.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalAmount,
  setGetTotal,
} from "../../CartUtil/CartSlice";
import CartItem from "./CartItem";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);

  useEffect(() => {
   dispatch(setGetTotal());
  }, [cartItems, dispatch ]);

  return (
    <div className="cart-page">
    
      <div className="cart-heading">
        <h1>Your Cart</h1>
        <Link to="/" className="link">
          <CloseIcon sx={{ color: "#696418" }} />
        </Link>
      </div>

      {cartItems?.length === 0 ? (
       <div>
        <h1>Cart empty  </h1>
       </div>
      ) : (
        <div className="box">
          {cartItems?.map((item, i) => (
            <CartItem key={i} item={item} />
          ))}

          <div className="cart-sub-total">
            <div className="total-price">
              <h3>Total</h3>
              <Button
                className="info"
                size="small"
                variant="contained"
                style={{ backgroundColor: "#113f3a" }}
              >
                ${totalAmount}.00
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
      )}
    </div>
  );
};

export default CartPage;
