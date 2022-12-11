import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/selectors';
import { logOut } from '../../redux/userAuthOperations';
import { Button } from '../Form/FormInputContact.styled';
import { StyledBox, StyledButton, StyledList } from './UserMenu.styled';

export const UserMenu = ({ onClick }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const onClickLogOut = () => {
    dispatch(logOut());
  };
  return (
    <StyledBox>
      <StyledButton type="button" onClick={onClick}>
        X
      </StyledButton>
      <StyledList>
        <li>
          {' '}
          <b>Ім'я:</b> {user.name}
        </li>
        <li>
          {' '}
          <b>E-mail:</b> {user.email}
        </li>
      </StyledList>
      <Button type="button" onClick={onClickLogOut}>
        Logout
      </Button>
    </StyledBox>
  );
};
