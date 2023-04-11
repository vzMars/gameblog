import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const RequireAuth = () => {
  const { user } = useAuthContext().state;
  return !user ? <Outlet /> : <Navigate to='/' />;
};

export default RequireAuth;
