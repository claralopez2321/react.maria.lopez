import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ product, onAddToCart }) => {
  return (
    <div className="item-detail-card">
      <img src={product.image} alt={product.title} className="item-detail-image" />
      <div className="item-detail-content">
        <h2 className="item-detail-title">{product.title}</h2>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-price">Precio: ${product.price}</p>
        <p className="item-detail-stock">Stock: {product.stock}</p>
        <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>
          Agregar al carrito
        </button>
        <br />
        <button className="back-button" onClick={() => window.history.back()}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;








