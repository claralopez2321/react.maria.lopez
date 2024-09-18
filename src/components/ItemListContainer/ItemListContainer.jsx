// src/components/ItemListContainer/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';

// Importa Firestore desde tu configuración
import { db } from '../../firebaseConfig'; // Ajusta la ruta si es necesario
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting, onAddToCart }) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Para mostrar un mensaje de carga

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(db, 'item'); // Referencia a la colección "item"
        const itemsSnapshot = await getDocs(itemsCollection);
        const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Items fetched:', itemsList); // Verificar que los datos sean correctos
        setItems(itemsList);
        setFilteredItems(itemsList); // Inicialmente muestra todos los productos
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setIsLoading(false); // Oculta el mensaje de carga cuando los datos han sido cargados
      }
    };

    fetchItems();
  }, []);

  const handleViewAllServices = () => {
    setFilteredItems(items); 
  };

  const filterByCategory = (categoryIds) => {
    console.log('Filtering by categories:', categoryIds); // Verificar las categorías que se están usando para filtrar
    const filtered = items.filter(item => {
      return categoryIds.includes(item.categoryId); // Asegúrate de que esto coincida con los IDs de categoría
    });

    console.log('Filtered items:', filtered); // Verificar los productos filtrados
    setFilteredItems(filtered);
  };

  // Renderiza un mensaje de carga mientras los productos se están obteniendo
  if (isLoading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      
      <div className="category-buttons">
        <button onClick={() => filterByCategory(['wwVGLsjplyJL06KMSAN7', 'cIZmTyocVsIiSNb8KaEg'])}>Viajes</button>
        <button onClick={() => filterByCategory(['HmKruAAuNErDD2CLrVUS', 'JatHsTvhGgHAyM5Wpfkf'])}>Días únicos</button>
        <button onClick={() => filterByCategory(['pWGyZCSvSV3die6PJEUQ', '0PYcTV4Jf4IeibA2NgbO', '4FTpGEt5czEZpRqwZFTi'])}>Sesiones especiales</button>
      </div>

      <div className="products-list">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              stock={item.stock}
              image={item.image}
              onAddToCart={onAddToCart} 
            />
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
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
