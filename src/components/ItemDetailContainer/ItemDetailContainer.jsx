import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/productos.json'); // Asegúrate de que la ruta sea correcta
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const selectedProduct = data.find(item => item.id === parseInt(id));
        setProduct(selectedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;




