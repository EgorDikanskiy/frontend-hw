import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import RootLayout from 'components/RootLayout';
import { routerUrls } from 'config/routerUrls';
import AboutPage from './pages/AboutPage';
import CatalogPage from './pages/CatalogPage';
import CategoriesPage from './pages/CategoriesPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <HashRouter>
      <RootLayout>
        <Routes>
          <Route path={routerUrls.catalog.mask} element={<CatalogPage />} />
          <Route path={routerUrls.productDetail.mask} element={<DetailPage />} />
          <Route path={routerUrls.categories.mask} element={<CategoriesPage />} />
          <Route path={routerUrls.about_us.mask} element={<AboutPage />} />
          <Route path="*" element={<Navigate to={routerUrls.catalog.mask} replace={true} />} />
        </Routes>
      </RootLayout>
    </HashRouter>
  );
}

export default App;
