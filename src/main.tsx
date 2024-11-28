import React from 'react';

import { createRoot } from 'react-dom/client';
import './index.scss';
import { RootStoreProvider } from 'stores/RootStore';
import App from './App';
import './config/configureMobX';
// import { AuthProvider } from './App/pages/Auth/context/AuthContext';
// import { CartProvider } from './App/pages/CartPage/context/CartContext';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  // <AuthProvider>
  //   <CartProvider>
  <RootStoreProvider>
    <App />
  </RootStoreProvider>,
  //   </CartProvider>
  // </AuthProvider>,
  // </StrictMode>
);
