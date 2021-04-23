import React, { useState } from 'react';
import './Navbar.css';

const Navbar = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeNav = () => {
    setClick(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="shop-logo" onClick={closeNav}>
          <img src="images/Cheapero200x200.png" alt="cheapero" />
        </div>
        <div className="navbar-container">
          <ul className={click ? 'navbar-items active' : 'navbar-items'}>
            <li className="nav-link">Home</li>
            <li className="nav-link">Shop</li>
            <li className="nav-link">Contact</li>
            <li className="nav-link">Login</li>
          </ul>
          <div className="cart">
            <i class="fas fa-shopping-cart"></i>
            {props.counter > 0 && (
              <div className="counter">
                <p>{props.counter}</p>
              </div>
            )}
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
