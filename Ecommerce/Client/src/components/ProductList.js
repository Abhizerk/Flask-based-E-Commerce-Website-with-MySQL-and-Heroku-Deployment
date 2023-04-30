import React, { useState, useEffect } from 'react';
import Product from './Product';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <Product
          key={product._id}
          id={product._id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;
