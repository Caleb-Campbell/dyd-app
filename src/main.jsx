import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain='dev-523gwn14iqnjtm83.us.auth0.com'
    clientId='OUuk4XP2xZfXr85vt3GH1daPKwSFEZVy'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    
    
    >
    <App />
    </Auth0Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
