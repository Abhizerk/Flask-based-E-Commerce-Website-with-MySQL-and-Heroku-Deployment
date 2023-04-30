import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => setCartItems(data))
      .catch(error => console.error(error));
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedCartItems);
    fetch('/api/cart', {
      method: 'DELETE',
      body: JSON.stringify({ itemId }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .catch(error => console.error(error));
  };

  const handleClearCart = () => {
    setCartItems([]);
    fetch('/api/cart', { method: 'DELETE' })
      .then(res => res.json())
      .catch(error => console.error(error));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <CartItem
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                onRemove={handleRemoveItem}
              />
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button onClick={handleClearCart}>Clear Cart</button>
            <button onClick={() => alert('Checkout functionality not implemented.')}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
