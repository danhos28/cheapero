import React from 'react';
import { useSelector } from 'react-redux';
import CartFooter from '../components/CartFooter';
import CartItem from '../components/CartItem';
import './Cart.css';
import { nanoid } from 'nanoid';

function Cart(props) {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="items-container">
      <div className="cart-wrapper">
        {cartItems.length !== 0 ? (
          cartItems.map((item) => {
            return (
              <CartItem
                key={nanoid()}
                itemId={item.id}
                imgUrl={item.imgUrl}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                setCart={props.setCart}
                cart={props.cart}
              />
            );
          })
        ) : (
          <p className="cart-empty">Cart is empty ...</p>
        )}
        {cartItems.length ? <CartFooter /> : null}
      </div>
    </div>
  );
}

export default Cart;
