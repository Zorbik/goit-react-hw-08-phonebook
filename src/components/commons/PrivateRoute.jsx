import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn, getPending } from '../../redux/selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  const isPending = useSelector(getPending);
  return isLoggedIn && !isPending ? children : <Navigate to="/login" />;
};
