// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Saludo from './components/Saludo/Saludo';
import Card from './components/Card/Card';
import CuadroFoco from './components/CuadroFoco/CuadroFoco';
import ContadorSec from './components/ContadorSec/ContadorSec';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './Context/CartContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartAnimated, setIsCartAnimated] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar onOpenSidebar={openSidebar} isCartAnimated={isCartAnimated} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="welcome" className="welcome">
                  <div className="welcome-content">
                    <img src="/fotospolaroid-16.png" alt="Welcome" />
                    <div className="text-content">
                      <h1 className="titulolanding">Bienvenido a ForeverFramed</h1>
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
                  <ItemListContainer greeting="Nuestros Productos" />
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
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout cartItems={[]} onClearCart={() => {}} />} />
        </Routes>
        <Footer />
        {isSidebarOpen && (
          <Sidebar onClose={closeSidebar} />
        )}
      </Router>
    </CartProvider>
  );
}

export default App;
