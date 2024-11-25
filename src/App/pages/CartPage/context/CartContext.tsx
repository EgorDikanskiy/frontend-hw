import React, { createContext, useContext } from 'react';
import CartStore from '../stores/CartStore';

const CartContext = createContext<CartStore | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cartStore = new CartStore();

  return <CartContext.Provider value={cartStore}>{children}</CartContext.Provider>;
};

export const useCartStore = (): CartStore => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartStore must be used within a CartProvider');
  }
  return context;
};
