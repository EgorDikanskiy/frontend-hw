import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Loader from 'components/Loader';
import { routerUrls } from 'config/routerUrls';
// import { useAuthStore } from '../../App/pages/Auth/context/AuthContext';
import { useRootStore } from 'stores/RootStore';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = observer(({ children }) => {
  const { authStore } = useRootStore();
  const { loading, user } = authStore;
  if (loading) return <Loader />;

  return user ? children : <Navigate to={routerUrls.login.create()} />;
});

export default PrivateRoute;
