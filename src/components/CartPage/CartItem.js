import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import "./CartPage.scss";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setDecreaseItem, setIncreaseItem, setRemoveItemFromCart } from '../../CartUtil/CartSlice';


const CartItem = ({ item: { id, heading, shoeType, img,  price, cartQuantity } }) => {
    const dispatch = useDispatch();

    const onRemoveItem = () => {
        dispatch(setRemoveItemFromCart({ id, heading, shoeType, img,  price, cartQuantity }))
      }
    
      const onIncreaseItemQTY = () => {
        dispatch(setIncreaseItem({ id, heading, shoeType, img,  price, cartQuantity }))
      }
      const onDecreaseItemQTY = () => {
        dispatch(setDecreaseItem({ id, heading, shoeType, img,  price, cartQuantity }))
      }
  return (
    <div>
       <div className="item">
        <div className="item-img">
          <img src= {img} alt="" />
        </div>

        <div className="item-details">
          <h3>{heading}</h3>
          <span>{shoeType}</span>

          <div className="item-button">
            <Button
              className="info"
              size="small"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}
              onClick={onDecreaseItemQTY}
             > - </Button>
            <Button
              className="info"
              size="small"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }}  >
                {cartQuantity}
                </Button>
            <Button
              className="info"
              size="small"
              variant="contained"
              style={{ backgroundColor: "#113f3a" }} 
              onClick={onIncreaseItemQTY} > 
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
          {price * cartQuantity}
          </Button>
          <DeleteIcon onClick={onRemoveItem} />
        </div>
      </div>
    </div>
  )
}

export default CartItem
