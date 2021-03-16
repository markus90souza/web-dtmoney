import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { Boot } from './styles/Boot';

ReactDOM.render(
  <React.StrictMode>
    <Boot />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


