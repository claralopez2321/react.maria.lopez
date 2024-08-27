// Checkout.jsx
import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; 
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: '¡Pago confirmado!',
      text: 'Gracias por elegirnos! En breve uno de nuestros diseñadores se comunicará con usted para gestionar su PhotoBook Digital!',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

    if (result.isConfirmed) {
      clearCart(); 
      navigate('/'); 
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Número de tarjeta:</label>
          <input type="text" id="cardNumber" name="cardNumber" required />
        </div>
        <div className="total-container">
          <h3>Total a pagar: ${calculateTotal()}</h3>
        </div>
        <button type="submit">Confirmar Pago</button>
      </form>
    </div>
  );
};

export default Checkout;

