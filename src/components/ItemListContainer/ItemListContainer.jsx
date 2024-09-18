// src/components/ItemListContainer/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { db } from '../../firebaseConfig'; // Ajusta la ruta si es necesario
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting, onAddToCart }) => {
  const [items, setItems] = useState([]); // Todos los productos
  const [filteredItems, setFilteredItems] = useState([]); // Productos filtrados

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(db, 'item'); // Referencia a la colección "item"
        const itemsSnapshot = await getDocs(itemsCollection);
        const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(itemsList);
        setFilteredItems(itemsList); // Inicialmente muestra todos los productos
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const filterByCategory = (category) => {
    const filtered = items.filter(item => item.categoryId === category);
    setFilteredItems(filtered);
  };

  const handleViewAllServices = () => {
    setFilteredItems(items);
  };

  return (
    <div>
      <h1>{greeting}</h1>

      <div className="category-buttons">
        <button onClick={() => filterByCategory('viajes')}>Viajes</button>
        <button onClick={() => filterByCategory('días únicos')}>Días únicos</button>
        <button onClick={() => filterByCategory('sesiones especiales')}>Sesiones especiales</button>
      </div>

      <div className="products-list">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              stock={item.stock}
              image={item.image}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <p>No hay stock disponible para esta categoría.</p>
        )}
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


