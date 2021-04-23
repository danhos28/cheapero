import React, { useState } from 'react';
import ItemDetails from '../pages/ItemDetails';
import Button from './Button';
import './Cards.css';

const Cards = (props) => {
  const { name, price, desc, imgUrl } = props;

  const handleCart = () => {
    props.setCart(props.cart + 1);
  };

  const modalHandler = () => {
    props.setModalOpen(true);
  };

  return (
    <>
      <div className="cards">
        <img
          src={imgUrl}
          alt="items"
          className="cards-img"
          onClick={modalHandler}
        />
        <div className="item">
          <p className="name">{name}</p>
          <p className="price">{price}</p>
        </div>
        <Button value="Add to cart" onClick={handleCart} />
      </div>
    </>
  );
};

export default Cards;
