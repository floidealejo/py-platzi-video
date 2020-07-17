// import { router } from 'json-server';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Home} />
  </BrowserRouter>
);
export default App;
