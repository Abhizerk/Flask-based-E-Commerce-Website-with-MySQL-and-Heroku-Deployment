import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Checkout from './Checkout';
import Confirmation from './Confirmation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/confirmation" component={Confirmation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
