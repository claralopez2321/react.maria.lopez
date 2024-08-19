import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting, onAddToCart }) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/productos.json');
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

  const handleViewAllServices = () => {
    setFilteredItems(items); // Muestra todos los productos
  };

  const filterByCategory = (categoryIds) => {
    const filtered = items.filter(item => categoryIds.includes(item.id));
    setFilteredItems(filtered);
  };

  return (
    <div>
      <h1>{greeting}</h1>
      
      <div className="category-buttons">
        <button onClick={() => filterByCategory([1, 7])}>Viajes</button>
        <button onClick={() => filterByCategory([3, 4, 6])}>Sesiones especiales</button>
        <button onClick={() => filterByCategory([2, 5])}>Días únicos</button>
      </div>

      <div className="products-list">
        {filteredItems.map(item => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            stock={item.stock}
            image={item.image}
            onAddToCart={onAddToCart} // Pasa la función aquí
          />
        ))}
      </div>
      
      <div className="view-all-container">
        <button className="view-all-button" onClick={handleViewAllServices}>
          Ver todos los servicios
        </button>
      </div>
    </div>
  );
};

export default ItemListContainer;
