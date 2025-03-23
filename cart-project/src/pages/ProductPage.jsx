import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './ProductPage.css';

const ProductPage = () => {
  const { cart, addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="product-page">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isInCart={isInCart(product.id)}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;




