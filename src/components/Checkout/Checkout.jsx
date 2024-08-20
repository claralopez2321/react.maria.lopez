import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; 
import './Checkout.css';

const Checkout = ({ cartItems, onClearCart }) => {
  const navigate = useNavigate(); // Inicializa useNavigate

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Muestra el SweetAlert
    const result = await Swal.fire({
      title: '¡Pago confirmado!',
      text: 'Gracias por elegirnos! En breve uno de nuestros diseñadores se comunicará con usted para gestionar su PhotoBook Digital!',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

    // Si el usuario hace clic en "Aceptar"
    if (result.isConfirmed) {
      console.log('SweetAlert confirmado');
      
      // Limpia el carrito
      if (onClearCart) {
        onClearCart();
        console.log('Carrito limpiado');
      } else {
        console.error('onClearCart no está definido');
      }

      navigate('/'); 
      console.log('Redirigiendo a la página de inicio');
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


