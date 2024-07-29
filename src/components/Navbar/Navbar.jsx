import React from 'react'
import "./Navbar.css"
import CarWidget from '../CarWidget/Carwidget'

export const Navbar = () => {
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
        <CarWidget />
      </div>
    </nav>  
)
}
export default Navbar; 