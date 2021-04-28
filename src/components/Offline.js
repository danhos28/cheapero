import React from 'react';
import './Offline.css';

const Offline = () => {
  return (
    <div className="offline">
      <i className="fas fa-exclamation-triangle fa-lg"></i>
      <div className="offline-wrapper">
        <h2>You are currently offline.</h2>
        <p>Don't worry! You can still browse the items.</p>
      </div>
    </div>
  );
};

export default Offline;
