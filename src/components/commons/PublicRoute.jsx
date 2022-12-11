import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from '../../redux/selectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/" />;
};
