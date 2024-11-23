import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../App/pages/Auth/context/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = observer(({ children }) => {
  const authStore = useAuthStore();
  if (authStore.loading) return <div>Loading...</div>;

  return authStore.user ? <>{children}</> : <Navigate to="/login" />;
});

export default PrivateRoute;