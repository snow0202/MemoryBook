import { FC } from "react";
import { Navigate, useLocation, Location } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

interface PrivateRouteProps {
  element: React.ReactElement;
}

export const PrivateRoute: FC<PrivateRouteProps> = (props: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();
  const location: Location = useLocation();

  return isAuthenticated ? props.element : <Navigate to="/login" state={{ from: location }} />;
};