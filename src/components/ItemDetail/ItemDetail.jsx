// ItemDetail.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1 // Puedes ajustar la cantidad según lo necesites
    });
  };

  return (
    <div className="item-detail-card">
      <img src={product.image} alt={product.title} className="item-detail-image" />
      <div className="item-detail-content">
        <h2 className="item-detail-title">{product.title}</h2>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-price">Precio: ${product.price}</p>
        <p className="item-detail-stock">Stock: {product.stock}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
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










