// import { router } from 'json-server';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/Register' component={Register} />
    </Switch>
  </BrowserRouter>
);
export default App;
