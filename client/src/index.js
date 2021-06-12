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
        <div className="max-w-3xl mx-auto">
          <App />
        </div>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
