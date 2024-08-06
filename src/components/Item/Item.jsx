import React from 'react';
import './Item.css';

const Item = ({ title, description }) => {
  return (
    <div className="item">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Item;

