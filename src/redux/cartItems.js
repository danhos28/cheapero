import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartItem',
  initialState: {
    cartItems: [],
    totalPriceState: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = state.cartItems.concat(action.payload);
    },
    counter: (state, action) => {
      state.cartItems[action.payload].quantity += 1;
    },
    TotalPricePay: (state) => {
      let pay = 0;
      for (let i = 0; i < state.cartItems.length; i++) {
        pay += state.cartItems[i].quantity * state.cartItems[i].price;
      }
      state.totalPriceState = pay;
    },

    removeItem: (state, action) => {
      if (state.cartItems[action.payload].quantity !== 1) {
        state.cartItems[action.payload].quantity -= 1;
      } else {
        state.cartItems.splice([action.payload], 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  counter,
  removeItem,
  TotalPricePay,
} = cartSlice.actions;

export default cartSlice.reducer;
