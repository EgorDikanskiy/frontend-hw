import React from 'react';
import { Routes, Route, Navigate, HashRouter, BrowserRouter } from 'react-router-dom';
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
import Test from './pages/Testing';

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path={routerUrls.catalog.mask} element={<CatalogPage />} />
          <Route path={routerUrls.productDetail.mask} element={<DetailPage />} />
          <Route path={routerUrls.categories.mask} element={<CategoriesPage />} />
          <Route path={routerUrls.about_us.mask} element={<AboutPage />} />
          <Route path={routerUrls.cart.mask} element={<CartPage />} />
          <Route path={routerUrls.payment.mask} element={<PaymentPage />} />
          <Route path={routerUrls.login.mask} element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route
            path={routerUrls.profile.mask}
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path={routerUrls.register.mask} element={<RegisterForm />} />
          <Route path="*" element={<Navigate to={routerUrls.catalog.mask} replace={true} />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
export default App;
