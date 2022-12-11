import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn, getToken } from '../../redux/selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  const token = useSelector(getToken);
  const isRedirect = isLoggedIn || token;
  return isRedirect ? children : <Navigate to="/login" />;
};
