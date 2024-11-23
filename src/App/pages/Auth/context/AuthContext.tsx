import React, { createContext, useContext } from 'react';
import { AuthStore } from '../stores/AuthStore';

interface AuthContextValue {
  authStore: AuthStore;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const authStore = new AuthStore(); // Создаем экземпляр стора внутри провайдера.

  return <AuthContext.Provider value={{ authStore }}>{children}</AuthContext.Provider>;
};

export const useAuthStore = (): AuthStore => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthStore must be used within an AuthProvider');
  }
  return context.authStore;
};
