import React, { createContext, useContext } from 'react';
import CatalogStore from './stores/CatalogStore';
import PaginationModel from './stores/PaginationModel';
import QueryModel from './stores/QueryParamsModel';

// Создаем интерфейс для контекста, чтобы упростить типизацию
interface CatalogStoreContextValue {
  catalogStore: CatalogStore;
}

// Инициализация контекста без начального значения
const CatalogStoreContext = createContext<CatalogStoreContextValue | undefined>(undefined);

// Создаем провайдер, который инициализирует стор и передает его в контекст
export const CatalogStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const paginationModel = new PaginationModel();
  const queryModel = new QueryModel();
  const catalogStore = new CatalogStore(queryModel, paginationModel);

  return <CatalogStoreContext.Provider value={{ catalogStore }}>{children}</CatalogStoreContext.Provider>;
};

// Хук для доступа к `CatalogStore` из контекста
export const useCatalogStore = (): CatalogStore => {
  const context = useContext(CatalogStoreContext);
  if (!context) {
    throw new Error('useCatalogStore must be used within a CatalogStoreProvider');
  }
  return context.catalogStore;
};
