import {createSlice} from "@reduxjs/toolkit" ; 
export const CartSlice = createSlice({
    name : 'cart' , 
    initialState : { value : 0   } , 
    reducer : {
        increment : (state) => {
            state.value =   500 
        } , 

        decrement : (state) => {
            state.value -=  1 
        } , 
        incrementByAmount : (state , action)=> {
            state.value +=action.payload 
        } , 

    } , 
})

export const {increment , decrement , incrementByAmount} = CartSlice.actions ; 

export default CartSlice.reducer ; 

