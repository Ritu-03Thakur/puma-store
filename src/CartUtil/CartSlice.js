import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setIncreaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setDecreaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setClearCartItems: (state, action) => {
      state.cartItems = []  ; 
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setGetTotal: (state, action) => {
      let { totalAmount, totalQty } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQty += cartQuantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQty: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQty;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemCart,
  setRemoveItemFromCart,
  setIncreaseItem,
  setDecreaseItem,
  setClearCartItems,
  setGetTotal , 
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState ; 
export const selectCartItems = (state) => state.cart.cartItems ; 
export const selectTotalAmount = (state) => state.cart.cartTotalAmount ; 
export const selectTotalQTY = (state) => state.cart.cartTotalQuantity ; 

export default CartSlice.reducer;
