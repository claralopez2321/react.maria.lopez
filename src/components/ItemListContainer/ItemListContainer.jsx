import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import Contador from '../Contador/Contador'; // Asegúrate de que la ruta sea correcta

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/productos.json'); // Asegúrate de que la ruta sea correcta
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Item title={product.title} description={product.description} price={product.price} />
            <Contador productId={product.id} /> {/* Pasa el ID del producto al contador */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;





