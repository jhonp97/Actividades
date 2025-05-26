import React, { useState, useEffect } from 'react';
import '@/css/FakeStoreComponent.css';

function ProductCard({ id, title, price, category, image, description }) {
  return (
    <div className="Card">
      <img src={image} alt={title} className="Card-image" loading="lazy" />
      <div className="Card-body">
        <h3>{title}</h3>
        <p>
          <strong>Categoria:</strong> {category}
        </p>
        <p>
          <strong>Precio:</strong> €{price}
        </p>
        <p className="Description">{description}...</p>
      </div>
    </div>
  );
}

const FakeStoreComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch abortado");
        } else {
          console.error("Error al obtener productos:", error);
        }
      }
    };
    console.log("Componente montado")
    fetchProducts();

    return () => {
      controller.abort(); 
      console.log("Componente desmontado")
    };
  }, []);

  return (
    <div className="Fake-store">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default FakeStoreComponent;
