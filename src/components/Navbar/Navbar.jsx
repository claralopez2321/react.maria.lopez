import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import CarWidget from '../CarWidget/CarWidget';

const Navbar = ({ onOpenSidebar }) => { // Recibe la función para abrir el sidebar
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src="/logotransparenteparafondonegro.png" alt="ForeverFramed Logo" style={{ height: '50px' }} />
        </a>
      </div>
      <div className="navbar-links">
        <a href="#welcome">Bienvenida</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
      </div>
      <div className="car-widget-container">
        <button onClick={onOpenSidebar} className="cart-icon-button">
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        <CarWidget />
      </div>
    </nav>
  );
};

export default Navbar;


