import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Loader from 'components/Loader';
import { useAuthStore } from '../../App/pages/Auth/context/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = observer(({ children }) => {
  const authStore = useAuthStore();
  const { loading, user } = authStore;
  if (loading) return <Loader />;

  return user ? <>{children}</> : <Navigate to="/login" />;
});

export default PrivateRoute;
