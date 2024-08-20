// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Saludo from './components/Saludo/Saludo';
import Card from './components/Card/Card';
import CuadroFoco from './components/CuadroFoco/CuadroFoco';
import ContadorSec from './components/ContadorSec/ContadorSec';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Checkout from './components/Checkout/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartAnimated, setIsCartAnimated] = useState(false); // Estado para la animación del carrito

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
    setIsCartAnimated(true); // Activar animación
    setTimeout(() => {
      setIsCartAnimated(false); // Desactivar animación después de 300ms
    }, 300);
  };

  const handleCheckout = () => {
    window.location.href = '/checkout'; // Redirige a la página de checkout
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // Calcula el total a pagar
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <Router>
      <Navbar onOpenSidebar={openSidebar} isCartAnimated={isCartAnimated} /> {/* Pasar el estado de animación */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="welcome" className="welcome">
                <div className="welcome-content">
                  <img src="/fotospolaroid-16.png" alt="Welcome" />
                  <div className="text-content">
                    <h1 className='titulolanding'>Bienvenido a ForeverFramed</h1>
                    <Saludo saludo="Nuestro equipo de trabajo" horario="mañana" />
                    <p>
                      En ForeverFramed.com, inmortalizamos tus momentos especiales con elegancia. 
                      Desde bodas hasta graduaciones, crea recuerdos que durarán para siempre.
                    </p>
                  </div>
                </div>
              </section>
              <section id="cuadro-foco" className="cuadro-foco-section">
                <CuadroFoco />
                <ContadorSec />
              </section>
              <section id="products" className="products">
                <ItemListContainer greeting="Nuestros Productos" onAddToCart={addToCart} />
              </section>
              <section id="services" className="services">
                <h2>¿Beneficios de tener tus recuerdos en ForeverFramed?</h2>
                <div className="services-grid">
                  <Card title="Viajes inolvidables" description="Podrán ver las fotos y videos de ese gran viaje todas las veces que quieran. Ideal para inmortalizar momentos" />
                  <Card title="Fiestas únicas" description="El dominio y el host de tus recuerdos son permanentes, es decir que tus recuerdos no se borrarán nunca!" />
                  <Card title="Días para recordar" description="Las tecnologías van a pasos de gigante. Es por eso que aunque éstas cambien, tendrás los recuerdos listos para ver en cualquier dispositivo." />
                </div>
              </section>
              <section id="contact" className="contact">
                <div className="form-container">
                  <form>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    <button type="submit">Enviar</button>
                  </form>
                </div>
              </section>
            </>
          }
        />
        <Route
          path="/item/:id"
          element={<ItemDetailContainer onAddToCart={addToCart} />}
        />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} />}
        />
      </Routes>
      <Footer />
      {isSidebarOpen && (
        <Sidebar
          cartItems={cartItems}
          onClose={closeSidebar}
          onCheckout={handleCheckout}
          onClearCart={clearCart} 
        />
      )}
    </Router>
  );
}

export default App;

