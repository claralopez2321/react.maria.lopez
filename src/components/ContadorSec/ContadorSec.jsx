// src/components/ContadorSec/ContadorSec.jsx
import React, { useState, useEffect } from 'react';
import './ContadorSec.css';

export const ContadorSec = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Incrementa el contador cada segundo
    const intervalo = setInterval(() => {
      setContador(prevContador => prevContador + 1);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, []);

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div>
      <p>Contador: {contador} segundos</p>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};
