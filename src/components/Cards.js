import React from "react";
import Button from "./Button";
import "./Cards.css";

const Cards = (props) => {
  const { name, price, desc, imgUrl } = props;

  return (
    <>
      <div className="cards">
        <img src={imgUrl} alt="items" className="cards-img" />
        <div className="item">
          <p className="name">{name}</p>
          <p className="price">{price}</p>
        </div>
        <Button value="Add to cart" />
      </div>
    </>
  );
};

export default Cards;
