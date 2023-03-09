import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import "./CartPage.scss" ; 
import { Link } from "react-router-dom";

const CartPage = () => {
  const [count , setCount] = useState(1) ; 

  const handleCount = () =>{
    if(count <= 1 ){
      setCount(count);
    }
    else{

      setCount(count-1) ; 
    }
  }
  return (
    <div className="cart-page">
        <div className="cart-heading">
      <h1>Your Cart</h1>
      <Link to= "/">
      < CloseIcon  sx={{color: "#696418"}}/>
      </Link>


        </div>
      <div className="item">
        <div className="item-img">
          <img src="./assert/shoe2.jpeg" alt="" />
        </div>

        <div className="item-details">
          <h3>Zoom Max</h3>
          <span>Running Shoes</span>

          <div className="item-button">
            <button onClick={handleCount} > - </button>
            <button> {count} </button>
            <button onClick={() =>{ setCount(count + 1)  }} > + </button>
          </div>
        </div>

        <div className="item-price">
          <button> $ 150 </button>
          <DeleteIcon />
        </div>
      </div>
     <div className="cart-sub-total">
        <div className="total-price">
        <h3>Total</h3>
        <button>$150</button>
        </div>

        <span>taxes and Shipping will calulate </span>
        <button id="btn">check Out now</button>
       
     </div>

    </div>
  );
};

export default CartPage;
