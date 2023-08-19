import React from "react";
import Button from "@mui/material/Button";
import { InputAdornment, TextField } from "@mui/material";
import { Lock } from "@mui/icons-material";
import CardPath from "./CardPath";
import "./cartpage.scss"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalAmount } from "../CartUtil/CartSlice";

const Payment = () => {
  const totalAmount = useSelector(selectTotalAmount);

  const handleSubmit = () =>{
    alert(" Thankyou Continue Shopping !!" )
  }

  return (
    <div className="payment">
      <CardPath />
      <div className="payment-heading">
        <h2> Payment </h2>
      </div>
      <div className="payment-container">
        <TextField
          id="outlined-multiline-flexible"
          label="Name on card"
          multiline
          maxRows={4}
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Card number"
          multiline
          maxRows={4}
        />
        <div className="payment-box">
          <TextField
            label="Expiry date"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">MM/YY</InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Security code"
            multiline
            maxRows={4}
          />
        </div>
        <TextField
          id="outlined-multiline-flexible"
          label="ZIP/Postal code"
          multiline
          maxRows={4}
        />
      </div>

      <Link to={"/"}>
        <Button
          className="btn"
          size="medium"
          variant="contained"
          style={{ backgroundColor: "#113f3a" }}
          onClick={handleSubmit}
        >
        <Lock/>Pay <span>${totalAmount}.00</span>
        </Button>
      </Link>
      
    </div>
  );
};

export default Payment;
