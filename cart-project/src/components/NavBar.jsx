import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h1>Store</h1>
      <div className="cart-info">
        {location.pathname === '/cart' ? (
          <Link to="/">Products</Link>
        ) : (
          <Link to="/cart">Cart ({cart.length})</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;



