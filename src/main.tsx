import React from 'react';

import { createRoot } from 'react-dom/client';
import './index.scss';
import { RootStoreProvider } from 'stores/RootStore';
import App from './App';
import './config/configureMobX';

createRoot(document.getElementById('root')!).render(
  <RootStoreProvider>
    <App />
  </RootStoreProvider>,
);
