import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Sidebar.css';

const Sidebar = ({ cartItems, onClose, onClearCart }) => {
  const navigate = useNavigate(); // Crea una instancia de useNavigate

  // Calcula el total a pagar
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Usa navigate para redirigir a la página de checkout
    navigate('/checkout');
  };

  return (
    <div className="sidebar">
      <button className="close-sidebar" onClick={onClose}>X</button>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} className="sidebar-item-image" />
              <span>{item.title} - ${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="total-container">
          <h3>Total a pagar: ${calculateTotal()}</h3>
          <button className="checkout-button" onClick={handleCheckout}>Finalizar compra</button>
        </div>
      )}
      <button className="clear-cart-button" onClick={onClearCart}>Limpiar carrito</button> {/* Botón para limpiar carrito */}
    </div>
  );
};

export default Sidebar;




