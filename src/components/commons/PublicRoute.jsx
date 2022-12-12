import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from '../../redux/selectors';

export const PublicRoute = ({ children, restricted = false, ...props }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  return !isLoggedIn && restricted ? children : <Navigate to="/contacts" />;
};
