import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from './CartContext';

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const history = useHistory();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const order = { items: cartItems, formData };
    // Send order to server and handle response
    console.log('Order submitted:', order);
    clearCart();
    history.push('/confirmation');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} />
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
