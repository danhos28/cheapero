import React from "react";
import Button from "./Button";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-banner" />

        <div className="hero-content">
          <h1>NEW SEASON ARRIVALS</h1>
          <Button value="Shop Now" />
        </div>
      </div>
    </>
  );
};

export default Hero;
