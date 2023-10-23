import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa el cliente específico de ReactDOM
import { Auth0Provider } from '@auth0/auth0-react'; // Importa Auth0Provider desde la biblioteca 'auth0-react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea una raíz para la representación React
root.render(
  <React.StrictMode>
    <Auth0Provider 
      domain='dev-t1r3smzs77xpir5o.us.auth0.com'
      clientId='8SyvyhfwgUEzMCcp7nQu9CiFivxM9mLl' 
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
