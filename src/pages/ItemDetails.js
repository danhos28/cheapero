import React, { useState } from 'react';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import './itemDetails.css';
import { motion } from 'framer-motion';
import { addToCart, counter } from '../redux/cartItems';

function ItemDetails(props) {
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
  const closeModal = () => {
    setModalOpen(false);
  };

  const [imageItem, setImageItem] = useState(imgUrl[0]);
  const imageHandle = (color) => {
    if (color === 'first') {
      setImageItem(imgUrl[0]);
    } else if (color === 'second') {
      setImageItem(imgUrl[1]);
    } else if (color === 'third') {
      setImageItem(imgUrl[2]);
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
            <img src={imageItem} alt="item preview" />
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
                style={{ background: colors[0] }}
                onClick={() => imageHandle('first')}
              />
              <div
                className="color-2"
                style={{ background: colors[1] }}
                onClick={() => imageHandle('second')}
              />
              <div
                className="color-3"
                style={{ background: colors[2] }}
                onClick={() => imageHandle('third')}
              />
            </div>
            <p className="item-price">{price}</p>
            <Button value="Add to cart" onClick={handleCart} />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default ItemDetails;
