import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import './Home.css';
import Aos from 'aos';
//import itemList from '../items/ItemData.js';
import 'aos/dist/aos.css';
import ItemDetails from './ItemDetails';
import { AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import Categories from './Categories';
import Axios from 'axios';

export const Home = (props) => {
  Aos.init();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState([]);
  const [itemListData, setItemListData] = useState([]);
  const url = 'http://localhost:1337/products/';

  useEffect(() => {
    Axios.get(url)
      .then((result) => {
        setItemListData(result.data);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
    console.log();
  }, []);

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
            placeholder="search product"
          />
          <i className="fas fa-search fa-lg"></i>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <div className="products">
            {itemListData.map((item) => {
              return (
                <Cards
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  imgUrl={item.imgUrl[0].url}
                  setCart={props.setCart}
                  cart={props.cart}
                  setModalOpen={setModalOpen}
                  itemListData={itemListData}
                  setModalItem={setModalItem}
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
                itemId={modalItem[0].id}
                name={modalItem[0].name}
                imgUrl={modalItem[0].imgUrl}
                price={modalItem[0].price}
                desc={modalItem[0].desc}
                colors={modalItem[0].colors}
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
