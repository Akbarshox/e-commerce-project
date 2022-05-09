import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
   name: "cart",
   initialState: {
      cartData: []
   },
   reducers: {
      setCart: (state, action) => {
         return {
            ...state,
            cartData: [...state.cartData, action.payload]
         }
      }
   }
})

export const {setCart} = cartSlice.actions;