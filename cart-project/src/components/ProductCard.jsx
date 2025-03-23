import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, isInCart, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="description">{product.description}</p>
      <p className="price">Rs.{product.price}</p>
      <button onClick={() => addToCart(product)} disabled={isInCart}>{isInCart ? 'Added to Cart' : 'Add to Cart'}</button>
    </div>
  );
};

export default ProductCard;

