import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import RootLayout from 'components/RootLayout';
import { routerUrls } from 'config/routerUrls';
import CatalogPage from './pages/CatalogPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <RootLayout>
      <HashRouter>
        <Routes>
          <Route path={routerUrls.catalog.mask} element={<CatalogPage />} />
          <Route path={routerUrls.productDetail.mask} element={<DetailPage />} />
          <Route path="*" element={<Navigate to={routerUrls.catalog.mask} replace={true} />} />
        </Routes>
      </HashRouter>
    </RootLayout>
  );
}

export default App;
