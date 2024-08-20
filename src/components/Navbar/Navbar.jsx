import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import CarWidget from '../CarWidget/CarWidget';

const Navbar = ({ onOpenSidebar, isCartAnimated }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); // Navega a la página de inicio
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={handleLogoClick}>
        <img
          src="/logotransparenteparafondonegro.png"
          alt="ForeverFramed Logo"
          style={{ height: '50px', cursor: 'pointer' }}
        />
      </div>
      <div className="navbar-links">
        <a href="#welcome">Bienvenida</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
      </div>
      <div className="car-widget-container">
        <button
          onClick={onOpenSidebar}
          className={`cart-icon-button ${isCartAnimated ? 'animate-cart' : ''}`}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        <CarWidget />
      </div>
    </nav>
  );
};

export default Navbar;




