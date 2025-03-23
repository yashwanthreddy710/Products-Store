import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotalPrice,
    emptyCart,
  } = useCart();

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-text">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <div className="quantity-container">
                <p>Rs.{item.price}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                </div>
                <p className="total-price">Total Price: Rs.{(item.price * item.quantity).toFixed(2)}</p>
                <div className="remove-btn"><button onClick={() => removeFromCart(item.id)}>Remove from Cart</button></div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="billing-spacing">
        <div className="billing">
          <div className="total-bill">
            <h3>Total Price: Rs.{calculateTotalPrice().toFixed(2)}</h3>
            <h4>Discount (10%): Rs.{((calculateTotalPrice() * 0.1).toFixed(2))}</h4>
            <h3>Final Price: Rs.{(calculateTotalPrice() - (calculateTotalPrice() * 0.1)).toFixed(2)}</h3>
          </div>
        <div className="cart-btns">
          <button onClick={emptyCart} className="empty-cart-btn">Empty Cart</button>
          <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
        </div>
        </div>
      </div>
      </div>
  );
};

export default CartPage;


