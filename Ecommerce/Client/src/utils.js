// A function to format currency amounts with a dollar sign and two decimal places
export const formatCurrency = (amount) => {
  return `$${(amount / 100).toFixed(2)}`;
};

// A function to calculate the total price of items in the cart
export const calculateTotal = (items) => {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};

// A function to validate an email address
export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
