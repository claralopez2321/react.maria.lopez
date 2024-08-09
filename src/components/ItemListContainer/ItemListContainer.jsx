import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/productos.json'); // Ajusta la ruta según sea necesario
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <div className="products-list">
        {items.map(item => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            stock={item.stock}
            image={item.image}
            className="product-card" 
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;















