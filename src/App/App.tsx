import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import RootLayout from 'components/RootLayout';
import { routerUrls } from 'config/routerUrls';
import AboutPage from './pages/AboutPage';
import Login from './pages/Auth/LoginPage';
import Profile from './pages/Auth/ProfilePage';
import RegisterForm from './pages/Auth/RigisterPage';
import CartPage from './pages/CartPage/CartPage';
import CatalogPage from './pages/CatalogPage';
import CategoriesPage from './pages/CategoriesPage';
import DetailPage from './pages/DetailPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <HashRouter>
      <RootLayout>
        <Routes>
          <Route path={routerUrls.catalog.mask} element={<CatalogPage />} />
          <Route path={routerUrls.productDetail.mask} element={<DetailPage />} />
          <Route path={routerUrls.categories.mask} element={<CategoriesPage />} />
          <Route path={routerUrls.about_us.mask} element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<Navigate to={routerUrls.catalog.mask} replace={true} />} />
        </Routes>
      </RootLayout>
    </HashRouter>
  );
}
export default App;
