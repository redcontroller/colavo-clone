import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import ServiceProvider from './components/Context/ServiceContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ServiceProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ServiceProvider>
  </React.StrictMode>
)
