import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
