// CarWidget.jsx
import React, { useContext } from 'react';
import './CarWidget.css';
import { CartContext } from '../../Context/CartContext';

const CarWidget = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.length;

  return (
    <div className="car-widget">
      {cartCount > 0 && <span>{cartCount}</span>}
    </div>
  );
};

export default CarWidget;

