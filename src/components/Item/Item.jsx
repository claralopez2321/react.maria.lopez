import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, title, description, price, stock, image, onAddToCart }) => {
  
  const handleAddToCart = () => {
    onAddToCart({
      id,
      title,
      price,
      image,
      quantity: 1 
    });
  };

  return (
    <div className="item-card">
      <img src={image} alt={title} className="item-image" />
      <h2 className="item-title">{title}</h2>
      <p className="item-price">${price}</p>
      <p className="item-stock">Stock: {stock}</p>
      <div className="item-buttons">
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Agregar al carrito
        </button>
        <Link to={`/item/${id}`} className="view-more-button">
          <button>Ver más</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;














