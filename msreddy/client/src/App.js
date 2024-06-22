import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './AllProducts';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
<>
<Router>
               
               <Routes>
                   
               <Route path="/" exact component={AllProducts} />
        <Route path="/product/:productId" component={ProductDetail} />
                   
               </Routes>
           </Router>
</>


  );
};

export default App;


