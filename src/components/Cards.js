import React from "react";
import Button from "./Button";
import "./Cards.css";

const Cards = (props) => {
  return (
    <>
      <div className="cards">
        <img src="images/bag-black.jpg" alt="items" className="cards-img" />
        <div className="item">
          <p className="name">Large Capacity Outdoor Sport Bag</p>
          <p className="price">$50.00</p>
        </div>
        <Button value="Add to cart" />
      </div>
    </>
  );
};

export default Cards;
