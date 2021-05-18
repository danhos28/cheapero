import React from 'react';
import Button from './Button';
import './Cards.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, counter } from '../redux/cartItems';

const Cards = (props) => {
  const localUrl = 'http://localhost:1337';
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const {
    id,
    name,
    price,
    imgUrl,
    setCart,
    setModalOpen,
    itemListData,
    setModalItem,
  } = props;
  const handleCart = () => {
    setCart(props.cart + 1);

    let items = cartItems.filter((item) => item.id === id);
    if (items.length === 0) {
      dispatch(
        addToCart([
          {
            id,
            name,
            price,
            imgUrl,
            quantity: 1,
          },
        ])
      );
    } else {
      let idx = cartItems.findIndex((item) => item.id === id);
      dispatch(counter(idx));
      // console.log(idx);
      // console.log('already existed');
    }
  };

  const modalHandler = () => {
    setModalItem(itemListData.filter((item) => item.id === id));
    setModalOpen(true);
  };

  return (
    <>
      <div className="cards">
        <img
          src={`${localUrl}${imgUrl}`}
          alt="items"
          className="cards-img"
          onClick={modalHandler}
        />
        <div className="item">
          <p className="name">{name}</p>
          <p className="price">${price}.00</p>
        </div>
        <Button value="Add to cart" onClick={handleCart} />
      </div>
    </>
  );
};

export default Cards;
