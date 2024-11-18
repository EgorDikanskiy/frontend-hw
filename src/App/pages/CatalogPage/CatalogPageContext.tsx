import React, { createContext, useContext, ReactNode } from "react";
import CatalogStore from './stores/CatalogStore';
import QueryParamsModel from "./stores/QueryParamsModel";

const queryParamsModel = new QueryParamsModel();
const catalogPageStore = new CatalogStore(queryParamsModel);

const CatalogPageStoreContext = createContext(catalogPageStore);

export const useCatalogPageStore = () => useContext(CatalogPageStoreContext);

interface CatalogPageStoreProviderProps {
    children: ReactNode;
}

export const CatalogPageStoreProvider = ({ children }: CatalogPageStoreProviderProps) => {
    return (
        <CatalogPageStoreContext.Provider value={catalogPageStore}>
            {children}
        </CatalogPageStoreContext.Provider>
    );
};
