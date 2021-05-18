import React, { useState } from 'react';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import './itemDetails.css';
import { motion } from 'framer-motion';
import { addToCart, counter } from '../redux/cartItems';

function ItemDetails(props) {
  const localUrl = 'http://localhost:1337';
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const {
    itemId,
    name,
    desc,
    price,
    imgUrl,
    colors,
    setModalOpen,
    setCart,
    cart,
  } = props;
  const [imageItem, setImageItem] = useState(imgUrl[0].url);
  const arrColors = colors.split(',');

  const closeModal = () => {
    setModalOpen(false);
  };

  const imageHandle = (color) => {
    if (color === 'first') {
      setImageItem(imgUrl[0].url);
    } else if (color === 'second') {
      setImageItem(imgUrl[1].url);
    } else if (color === 'third') {
      setImageItem(imgUrl[2].url);
    }
  };

  const handleCart = () => {
    setCart(cart + 1);
    let items = cartItems.filter(
      (item) => item.id === itemId && item.imgUrl === imageItem
    );
    if (items.length === 0) {
      dispatch(
        addToCart([
          {
            id: itemId,
            name,
            price,
            imgUrl: imageItem,
            quantity: 1,
          },
        ])
      );
    } else {
      let idx = cartItems.findIndex(
        (item) => item.id === itemId && item.imgUrl === imageItem
      );
      dispatch(counter(idx));
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="item-container"
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.2,
            },
          }}
          exit={{
            scale: 0,
            transition: {
              duration: 0.3,
            },
          }}
          className="item-details"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="item-img">
            <img src={localUrl + imageItem} alt="item preview" />
          </div>
          <div className="item-desc-container">
            <div className="close-modal" onClick={closeModal}>
              <p>X</p>
            </div>
            <p className="item-title">{name}</p>
            <p className="item-desc">{desc}</p>
            <div className="color-container">
              <div
                className="color-1"
                style={{ background: arrColors[0] }}
                onClick={() => imageHandle('first')}
              />
              <div
                className="color-2"
                style={{ background: arrColors[1] }}
                onClick={() => imageHandle('second')}
              />
              <div
                className="color-3"
                style={{ background: arrColors[2] }}
                onClick={() => imageHandle('third')}
              />
            </div>
            <p className="item-price">${price}.00</p>
            <Button value="Add to cart" onClick={handleCart} />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default ItemDetails;
