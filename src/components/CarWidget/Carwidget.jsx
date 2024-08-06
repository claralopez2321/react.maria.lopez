import React, { useState } from 'react';
import './CarWidget.css';

const CarWidget = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (quantity) => {
    setCartCount(prevCount => prevCount + quantity);
  };

  return (
    <div className="car-widget">
      {cartCount}
    </div>
  );
};

export default CarWidget;
