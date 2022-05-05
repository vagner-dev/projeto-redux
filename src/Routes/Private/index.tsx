import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
type Props = {
  children: JSX.Element;
  redirectTo: string;
};
const PrivateRoute: React.FC<Props> = ({ children, redirectTo }) => {
  const isAuthenticated = useSelector((state: any) => state.app.isLogin);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
