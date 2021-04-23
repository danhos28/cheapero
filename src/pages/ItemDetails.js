import React from 'react';
import Button from '../components/Button';
import './itemDetails.css';
import { motion } from 'framer-motion';

function ItemDetails(props) {
  const closeModal = () => {
    props.setModalOpen(false);
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
        >
          <div className="item-img">
            <img src="images/bag-black.jpg" alt="item image" />
          </div>
          <div className="item-desc-container">
            <div className="close-modal" onClick={closeModal}>
              <p>X</p>
            </div>
            <p className="item-title">Item Testing Number One</p>
            <p className="item-desc">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
            <div className="color-container">
              <div className="color-1" style={{ background: 'black' }} />
              <div className="color-2" style={{ background: 'blue' }} />
              <div className="color-3" style={{ background: 'red' }} />
            </div>
            <p className="item-price">$80.00</p>
            <Button value="Add to cart" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default ItemDetails;
