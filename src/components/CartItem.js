import React from 'react';
import './CartItem.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartItems';

function CartItem(props) {
  const { itemId, imgUrl, name, price, quantity, setCart, cart } = props;
  const totalPrice = quantity * Number(price.replace(/[^0-9.-]+/g, ''));
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const removeItemHandle = () => {
    setCart(cart - 1);
    let idx = cartItems.findIndex(
      (item) => item.id === itemId && item.imgUrl === imgUrl
    );
    dispatch(removeItem(idx));
  };

  return (
    <div className="cart-item-container">
      <img className="item-image" src={imgUrl} alt="item cart" />
      <div className="item-name">
        <p>{name}</p>
      </div>
      <p className="item-quantity">x {quantity}</p>
      <p className="item-price">${totalPrice}.00</p>
      <i className="fas fa-trash-alt" onClick={removeItemHandle}></i>
    </div>
  );
}

export default CartItem;
