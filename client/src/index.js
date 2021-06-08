import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

import App from './App';

import Headerbar from './components/header';

ReactDOM.render(
  <React.StrictMode>
    <Headerbar />
    <BrowserRouter>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
