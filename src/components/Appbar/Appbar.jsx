import { Box } from '../../components';
import { NavLink } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getLoggedIn, getToken, getUser } from '../../redux/selectors';
import { StyledBox, StyledButton, StyledLink } from './Appbar.styled';
import { useState } from 'react';
import { UserMenu } from '../UserMenu/UserMenu';

export const Appbar = () => {
  const [showMenu, setShowmenu] = useState(false);

  const isLoggedIn = useSelector(getLoggedIn);
  const token = useSelector(getToken);
  const isRedirect = isLoggedIn || token;
  const user = useSelector(getUser);

  const onClick = () => {
    setShowmenu(!showMenu);
  };
  return (
    <Box as="header" boxShadow="0px 10px 15px -10px rgba(0,0,0,0.75)">
      <Box as="nav" display="flex" justifyContent="space-between" p={2}>
        <Box display="flex" flexWrap="wrap" width="half">
          <StyledLink to="/">Hello-page</StyledLink>
          <StyledLink to="contacts">Contacts</StyledLink>
        </Box>
        <StyledBox
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          {isRedirect ? (
            <StyledButton type="button" onClick={onClick}>
              Вітаю, {user.name}
            </StyledButton>
          ) : (
            <NavLink to="login">Login</NavLink>
          )}
          {showMenu ? <UserMenu onClick={onClick} /> : ''}
        </StyledBox>
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
