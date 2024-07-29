import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import Saludo from './components/Saludo/Saludo';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <>
      <Navbar />
      
      {/* Welcome Section */}

      <section id="welcome" className="welcome">
        <div className="welcome-content">
          <img src="/fotospolaroid-16.png" alt="Welcome" />
          <div className="text-content">
          <Saludo saludo="Hola Buenos días" horario= "mañana"/>
          <ItemListContainer greeting= "Bienvenidos a ForeverFramed"/>

            <p>
              En ForeverFramed.com, inmortalizamos tus momentos especiales con elegancia. 
              Desde bodas hasta graduaciones, crea recuerdos que durarán para siempre.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services-grid">
          <div className="service-card">
            <h2>Viajes inolvidables</h2>
            <p>Viajes de todo tipo, recuerdos para siempre.</p>
          </div>
          <div className="service-card">
            <h2>Fiestas únicas</h2>
            <p>Bodas, cumpleaños, aniversarios.</p>
          </div>
          <div className="service-card">
            <h2>Días para recordar</h2>
            <p>Bautizos, graduaciones, eventos.</p>
          </div>
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