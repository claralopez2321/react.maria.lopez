// CuadroFoco.jsx
import React, { useState } from 'react';
import './CuadroFoco.css';

export const CuadroFoco = () => {
  const [encendido, setEncendido] = useState(false);

  const cambiarEstado = () => {
    setEncendido(!encendido);
    console.log('click');
  };

  console.log('CuadroFoco renderizando');

  return (
    <div className={`cuadro-foco ${encendido ? 'encendido' : 'apagado'}`}>
      <button onClick={cambiarEstado}>
        {encendido ? 'Hola por aqui!' : 'Adios por aqui!'}
      </button>
    </div>
  );
};

export default CuadroFoco;



