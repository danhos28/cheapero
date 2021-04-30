import React from 'react';
import Button from './Button';
import { useSelector } from 'react-redux';
import './CartFooter.css';

function CartFooter() {
  const { totalPriceState } = useSelector((state) => state.cart);
  return (
    <>
      <div className="space" />
      <div className="cart-footer">
        <p>Total : ${totalPriceState}.00</p>
        <Button value="Pay" />
      </div>
    </>
  );
}

export default CartFooter;
