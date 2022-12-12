import { Box } from '../../components';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import {
  getLoggedIn,
  getPending,
  getToken,
  getUser,
} from '../../redux/selectors';
import { StyledBox, StyledButton, StyledLink } from './Appbar.styled';
import { useState } from 'react';
import { UserMenu } from '../UserMenu/UserMenu';

export const Appbar = () => {
  const [showMenu, setShowmenu] = useState(false);
  const isPending = useSelector(getPending);
  const token = useSelector(getToken);

  const isLoggedIn = useSelector(getLoggedIn);
  const user = useSelector(getUser);

  const onClick = () => {
    setShowmenu(!showMenu);
  };
  return (
    <Box as="header" boxShadow="0px 10px 15px -10px rgba(0,0,0,0.75)">
      <Box as="nav" display="flex" justifyContent="space-between" p={2}>
        <Box display="flex" flexWrap="wrap" width="half">
          <StyledLink to="/">Hello-page</StyledLink>
          {token && <StyledLink to="contacts">Contacts</StyledLink>}
        </Box>
        <StyledBox
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          {isLoggedIn && !isPending && (
            <StyledButton type="button" onClick={onClick}>
              Вітаю, {user.name}
            </StyledButton>
          )}
          {!isLoggedIn && !isPending && (
            <StyledLink to="login">Login</StyledLink>
          )}
          {showMenu ? <UserMenu onClick={onClick} /> : ''}
        </StyledBox>
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
