import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import './config/configureMobX';
import { AuthProvider } from './App/pages/Auth/context/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
