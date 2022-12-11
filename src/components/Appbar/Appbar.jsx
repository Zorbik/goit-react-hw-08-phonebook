import { Box, Button } from '../../components';
import { NavLink } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedIn, getUser } from '../../redux/selectors';
import { logOut } from '../../redux/userAuthOperations';
import { StyledLink } from './Appbar.styled';

export const Appbar = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logOut());
  };

  return (
    <Box as="header" boxShadow="0px 10px 15px -10px rgba(0,0,0,0.75)">
      <Box as="nav" display="flex" justifyContent="space-between" p={4}>
        <Box display="flex">
          <StyledLink to="/">Hello-page</StyledLink>
          <StyledLink to="contacts">Contacts</StyledLink>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          {isLoggedIn ? (
            <>
              <Box as="span" mr={4}>
                Вітаю, {user.name}
              </Box>
              <Button type="button" onClick={onClick}>
                Logout
              </Button>
            </>
          ) : (
            <NavLink to="login">Login</NavLink>
          )}
        </Box>
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
