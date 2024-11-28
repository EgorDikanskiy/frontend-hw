import React, { createContext, useContext } from 'react';
import { AuthStore } from '../App/pages/Auth/stores/AuthStore';
import { CartStore } from '../App/pages/CartPage/stores/CartStore';

export class RootStore {
  authStore: AuthStore;
  cartStore: CartStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.cartStore = new CartStore(this);
  }
}

const RootStoreContext = createContext<RootStore | null>(null);

export const RootStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const rootStore = new RootStore();
  return <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>;
};

export const useRootStore = () => {
  const context = useContext(RootStoreContext);
  if (!context) {
    throw new Error('useRootStore must be used within a RootStoreProvider');
  }
  return context;
};
