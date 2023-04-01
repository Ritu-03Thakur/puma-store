import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
  KeyboardArrowDown,
  CreditCardOutlined,
  AccountBalanceOutlined,
  CurrencyRupeeOutlined,
  Wallet,
  PaymentOutlined,
  GppGood,
} from "@mui/icons-material";

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-heading">
        <h2>Select Payment Method</h2>

        <span>
          {" "}
          <GppGood /> 100% SAFE PAYMENTS
        </span>
      </div>
      <div className="pay-online">
        <div className="pay-heading">
          <span>PAY ONLINE</span>
          <hr />
        </div>

        <div className="online">
          <PaymentOutlined />
          <span>UPI (Google Pay/Phone Pay)</span>
          <KeyboardArrowDown />
        </div>
        <div className="online">
          <Wallet />
          <span>Wallet</span>
          <KeyboardArrowDown />
        </div>
        <div className="online">
          <CreditCardOutlined />
          <span>Debit/Credit Card</span>
          <KeyboardArrowDown />
        </div>
        <div className="online">
          <AccountBalanceOutlined />
          <span>Net Banking</span>
          <KeyboardArrowDown />
        </div>
      </div>
      <div className="pay-cash">
        <div className="pay-heading">
          <span>PAY IN CASH</span>
          <hr />
        </div>
        <div className="online">
          <CurrencyRupeeOutlined />
          <span>Cash on Delivery</span>
          <KeyboardArrowDown />
        </div>
      </div>
      <Link to="/payment">
        <Button
          className="info"
          size="medium"
          variant="contained"
          style={{ backgroundColor: "#113f3a" }}
        >
          Continue
        </Button>
      </Link>
    </div>
  );
};

export default Payment;
