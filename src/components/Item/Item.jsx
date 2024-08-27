// Item.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import { CartContext } from '../../Context/CartContext';

const Item = ({ id, title, price, stock, image }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      price,
      image,
      quantity: 1 
    });
  };

  return (
    <div className="item-card">
      {/* Mostrar imagen del producto */}
      {image && <img src={image} alt={title} className="item-image" />}
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
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














