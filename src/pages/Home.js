import React from "react";
import Cards from "../components/Cards";
import "./Home.css";
import Aos from "aos";
import itemList from "../items/ItemData.js";
import "aos/dist/aos.css";

export const Home = () => {
  Aos.init();
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
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
