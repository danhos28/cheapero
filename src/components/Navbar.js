import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import Cookies from 'universal-cookie';

const Navbar = (props) => {
  const cookies = new Cookies();
  const [click, setClick] = useState(false);
  const { pathname, hash } = useLocation();
  const handleClick = () => setClick(!click);

  const closeNav = () => {
    setClick(false);
  };

  const logoutHandle = () => {
    cookies.remove('token');
    cookies.remove('username');
  };

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash]); // do this on route change

  return (
    <>
      <div className="navbar">
        <Link to="/" className="shop-logo" onClick={closeNav}>
          <img src="images/Cheapero200x200.png" alt="cheapero" />
        </Link>
        <div className="navbar-container">
          <ul className={click ? 'navbar-items active' : 'navbar-items'}>
            {pathname === '/' ? (
              <Scroll
                className="scroll"
                to="hero"
                smooth={true}
                duration={1000}
                onClick={closeNav}
              >
                <li className="nav-link">Home</li>
              </Scroll>
            ) : (
              <Link to="/" className="home-link" onClick={closeNav}>
                <li className="nav-link">Home</li>
              </Link>
            )}
            {pathname === '/' ? (
              <Scroll
                className="scroll"
                to="home"
                smooth={true}
                duration={1000}
                onClick={closeNav}
              >
                <li className="nav-link">Shop</li>
              </Scroll>
            ) : (
              <Link className="home-link" to="/#home" onClick={closeNav}>
                <li className="nav-link">Shop</li>
              </Link>
            )}
            <Link to="/" className="home-link" onClick={closeNav}>
              <li className="nav-link">Contact</li>
            </Link>
            {cookies.get('token') ? (
              <Link to="/login" className="home-link" onClick={closeNav}>
                <li className="nav-link" onClick={logoutHandle}>
                  Logout
                </li>
              </Link>
            ) : (
              <Link to="/login" className="home-link" onClick={closeNav}>
                <li className="nav-link">Login</li>
              </Link>
            )}
            {cookies.get('username') && (
              <Link to="/" className="home-link" onClick={closeNav}>
                <li className="nav-link-user">{cookies.get('username')}</li>
              </Link>
            )}
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
