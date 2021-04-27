import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartItems';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
