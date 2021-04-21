import React from 'react';
import './Categories.css';

function Categories() {
  return (
    <>
      <div className="categories">
        <div className="browse">
          <p>We provide the best items for you</p>
          <p>Browse the items here</p>
        </div>

        <div className="container">
          <div className="container-col">
            <div className="shoes"></div>
            <div className="jackets"></div>
          </div>
          <div className="bags"></div>
          <div className="all"></div>
        </div>
      </div>
    </>
  );
}

export default Categories;
