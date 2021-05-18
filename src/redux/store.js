import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartItems';
import tokenReducer from './token';

export default configureStore({
  reducer: {
    cart: cartReducer,
    token: tokenReducer,
  },
});
