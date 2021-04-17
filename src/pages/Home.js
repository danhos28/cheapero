import React from "react";
import Cards from "../components/Cards";
import "./Home.css";
import Aos from "aos";
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
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};
