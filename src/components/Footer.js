import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="overview">
          <p>Overview</p>
          <Link to="/">Shipping</Link>
          <Link to="/">Refund</Link>
          <Link to="/">Promotion</Link>
        </div>
        <div className="company">
          <p>Company</p>
          <Link to="/">About</Link>
          <Link to="/">Career</Link>
          <Link to="/">Contact Us</Link>
        </div>
        <div className="explore">
          <p>Explore</p>
          <Link to="/">Terms & Conds</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">For Developer</Link>
        </div>
        <div className="input-email">
          <p>Special Letter</p>
          <div className="input-container">
            <input type="text" placeholder="Email" className="email-input" />
            <i className="far fa-paper-plane"></i>
          </div>
          <div className="soc-med">
            <Link to="/">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2021 • All Rights Reserved Terms of Use and Privacy Policy</p>
      </div>
    </>
  );
};

export default Footer;
