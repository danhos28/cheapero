import React from 'react';
import Button from './Button';
import './CartFooter.css';

function CartFooter() {
  return (
    <>
      <div className="space" />
      <div className="cart-footer">
        <p>Total : 0</p>
        <Button value="Pay" />
      </div>
    </>
  );
}

export default CartFooter;
