// Sidebar.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { CartContext } from '../../Context/CartContext';

const Sidebar = ({ onClose }) => {
  const { cartItems, clearCart, calculateTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="sidebar">
      <button className="close-sidebar" onClick={onClose}>Cerrar</button>
      <h2>Carrito de Compras</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="sidebar-item">
                <div className="sidebar-item-details">
                  <p>{item.title}</p>
                  <p>Precio: ${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${calculateTotal()}</h3>
          <button className="clear-cart-button" onClick={clearCart}>Limpiar Carrito</button>
          <button className="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;





