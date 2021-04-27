import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartItem',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = state.cartItems.concat(action.payload);
    },
    counter: (state, action) => {
      state.cartItems[action.payload].quantity += 1;
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
export const { addToCart, counter, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
