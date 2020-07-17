// import { router } from 'json-server';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route exact path='/Login' component={Login} />
  </BrowserRouter>
);
export default App;
