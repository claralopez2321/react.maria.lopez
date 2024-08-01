// App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import Saludo from './components/Saludo/Saludo';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Card from './components/Card/Card';
import CuadroFoco from './components/CuadroFoco/CuadroFoco'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <>
      <Navbar />
      
      {/* Welcome Section */}
      <section id="welcome" className="welcome">
        <div className="welcome-content">
          <img src="/fotospolaroid-16.png" alt="Welcome" />
          <div className="text-content">
            <Saludo saludo="Hola Buenos días" horario="mañana" />
            <ItemListContainer greeting="Bienvenidos a ForeverFramed" />
            <p>
              En ForeverFramed.com, inmortalizamos tus momentos especiales con elegancia. 
              Desde bodas hasta graduaciones, crea recuerdos que durarán para siempre.
            </p>
          </div>
        </div>
      </section>

      {/* CuadroFoco Component */}
      <section id="cuadro-foco" className="cuadro-foco-section">
        <CuadroFoco />
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services-grid">
          <Card title="Viajes inolvidables" description="Viajes de todo tipo, recuerdos para siempre." />
          <Card title="Fiestas únicas" description="Bodas, cumpleaños, aniversarios." />
          <Card title="Días para recordar" description="Bautizos, graduaciones, eventos." />
        </div>
      </section>

      {/* Contact Section */}
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

      <Footer />
    </>
  );
}

export default App;
