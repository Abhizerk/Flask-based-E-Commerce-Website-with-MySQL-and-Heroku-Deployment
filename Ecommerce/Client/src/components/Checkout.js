import React, { useState } from 'react';

function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit card');

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = { name, email, address, paymentMethod };
    fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => alert(`Order successfully placed! Order ID: ${data.orderId}`))
      .catch(error => console.error(error));
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea id="address" value={address} onChange={(event) => setAddress(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select id="paymentMethod" value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)}>
            <option value="credit card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="apple pay">Apple Pay</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
