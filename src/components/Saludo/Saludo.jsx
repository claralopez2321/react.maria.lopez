import React from 'react';
import "./Saludo.css"


const Saludo = ({ saludo,horario }) => {
  return (
    <div className="saludo-text">
      <h1>{saludo}</h1>
      <p>El horario es de {horario}</p>
    </div>
  );
};

export default Saludo;
