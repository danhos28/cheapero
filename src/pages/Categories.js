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
            <div className="shoes">
              <p>Shoes</p>
            </div>
            <div className="jackets">
              <p>Jackets</p>
            </div>
          </div>
          <div className="bags">
            <p>Bags</p>
          </div>
          <div className="all">
            <p>All</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
