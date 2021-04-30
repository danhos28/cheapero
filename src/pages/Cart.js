import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartFooter from '../components/CartFooter';
import CartItem from '../components/CartItem';
import './Cart.css';
import { nanoid } from 'nanoid';
import { TotalPricePay } from '../redux/cartItems';

function Cart(props) {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TotalPricePay());
  }, [cartItems, dispatch]);

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
