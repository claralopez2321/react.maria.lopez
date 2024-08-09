import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, title, description, price, stock, image }) => {
  return (
    <div className="item-card">
      <img src={image} alt={title} className="item-image" />
      <h2 className="item-title">{title}</h2>
      <p className="item-price">${price}</p>
      <p className="item-stock">Stock: {stock}</p>
      <Link to={`/item/${id}`} className="view-more-button">
        <button>Ver más</button>
      </Link>
    </div>
  );
};

export default Item;













