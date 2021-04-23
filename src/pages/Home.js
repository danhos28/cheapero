import React, { useState } from 'react';
import Cards from '../components/Cards';
import './Home.css';
import Aos from 'aos';
import itemList from '../items/ItemData.js';
import 'aos/dist/aos.css';
import ItemDetails from './ItemDetails';
import { AnimatePresence } from 'framer-motion';

export const Home = (props) => {
  Aos.init();

  const [modalOpen, setModalOpen] = useState(false);

  const handleCart = (cart) => {
    console.log('add items: ' + cart);
  };
  return (
    <>
      <div className="home">
        <h2>Latest Products</h2>
        <div
          data-aos="fade-down"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <div className="products">
            {itemList.map((item) => {
              return (
                <Cards
                  name={item.name}
                  price={item.price}
                  imgUrl={item.imgUrl[0]}
                  onCart={handleCart}
                  setCart={props.setCart}
                  cart={props.cart}
                  setModalOpen={setModalOpen}
                />
              );
            })}
          </div>
        </div>
        <AnimatePresence>
          {modalOpen && (
            <div className="modal">
              <ItemDetails setModalOpen={setModalOpen} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
