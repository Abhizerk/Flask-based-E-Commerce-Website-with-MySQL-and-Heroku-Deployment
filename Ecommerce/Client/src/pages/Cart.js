import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function Cart() {
  const { cartItems, removeItem, clearCart } = useContext(CartContext);

  const cartItemList = cartItems.map(item => (
    <li key={item.id}>
      {item.name} - {item.quantity} x ${item.price.toFixed(2)}
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </li>
  ));

  const subtotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>{cartItemList}</ul>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <button onClick={clearCart}>Clear Cart</button>
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
