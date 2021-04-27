import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeNav = () => {
    setClick(false);
  };

  return (
    <>
      <div className="navbar">
        <Link to="/" className="shop-logo" onClick={closeNav}>
          <img src="images/Cheapero200x200.png" alt="cheapero" />
        </Link>
        <div className="navbar-container">
          <ul className={click ? 'navbar-items active' : 'navbar-items'}>
            <Link to="/" className="home-link">
              <li className="nav-link">Home</li>
            </Link>
            <li className="nav-link">Shop</li>
            <li className="nav-link">Contact</li>
            <li className="nav-link">Login</li>
          </ul>
          <Link to="/cart" className="cart-link">
            <i className="fas fa-shopping-cart"></i>
            {props.counter > 0 && (
              <div className="counter">
                <p>{props.counter}</p>
              </div>
            )}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
