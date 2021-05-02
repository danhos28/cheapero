import React from 'react';
import Button from './Button';
import { Link as Scroll } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div className="hero-banner" />
        <div className="hero-content">
          <h1>NEW SEASON ARRIVALS</h1>
          <Scroll className="scroll" to="home" smooth={true} duration={1000}>
            <Button value="Shop Now" />
          </Scroll>
        </div>
      </div>
    </>
  );
};

export default Hero;
