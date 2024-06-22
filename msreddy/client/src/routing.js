import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllProducts} />
        <Route path="/product/:productId" component={ProductDetail} />
      </Switch>
    </Router>
  );
};

export default App;
