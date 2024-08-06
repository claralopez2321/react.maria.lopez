import React, { useState } from 'react';

const Contador = ({ productId }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="contador">
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Contador;



