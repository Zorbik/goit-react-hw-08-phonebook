import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 150px;
  margin: -10px 0px;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes[4]}px;
  height: 50px;
  transition: all 250ms linear;

  :hover {
    color: ${p => p.theme.colors.white};
    background-image: linear-gradient(
      to right top,
      #d16ba5,
      #c777b9,
      #ba83ca,
      #aa8fd8,
      #9a9ae1,
      #8aa7ec,
      #79b3f4,
      #69bff8,
      #52cffe,
      #41dfff,
      #46eefa,
      #5ffbf1
    );
  }
  &.active {
    color: ${p => p.theme.colors.blue};
    &:hover {
      color: ${p => p.theme.colors.white};
    }
  }
`;
