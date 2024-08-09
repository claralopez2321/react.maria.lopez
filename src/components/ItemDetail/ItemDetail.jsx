import React from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail-card">
      <img src={product.image} alt={product.title} className="item-detail-image" />
      <div className="item-detail-content">
        <h2 className="item-detail-title">{product.title}</h2>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-price">Precio: ${product.price}</p>
        <p className="item-detail-stock">Stock: {product.stock}</p>
        <Link to="/" className="back-button">Volver</Link>
      </div>
    </div>
  );
};

export default ItemDetail;







