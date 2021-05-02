import React, { useState } from 'react';
import Cards from '../components/Cards';
import './Home.css';
import Aos from 'aos';
import itemList from '../items/ItemData.js';
import 'aos/dist/aos.css';
import ItemDetails from './ItemDetails';
import { AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import Categories from './Categories';

export const Home = (props) => {
  Aos.init();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState(1);

  const itemModal = itemList.filter((item) => item.id === modalId);
  const { name, imgUrl, desc, price, colors } = itemModal[0];

  return (
    <>
      <Hero />
      <Categories />
      <div className="home" id="home">
        <h2>Latest Products</h2>
        <div className="search">
          <input
            type="text"
            className="item-search"
            placeholder="search products ..."
          />
          <i className="fas fa-search fa-lg"></i>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <div className="products">
            {itemList.map((item) => {
              return (
                <Cards
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  imgUrl={item.imgUrl[0]}
                  setCart={props.setCart}
                  cart={props.cart}
                  setModalOpen={setModalOpen}
                  setModalId={setModalId}
                />
              );
            })}
          </div>
        </div>
        <AnimatePresence>
          {modalOpen && (
            <div className="modal">
              <ItemDetails
                setModalOpen={setModalOpen}
                itemId={modalId}
                name={name}
                imgUrl={imgUrl}
                price={price}
                desc={desc}
                colors={colors}
                setCart={props.setCart}
                cart={props.cart}
              />
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
