import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '../commons/Box';

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-family: 'Helvetica Neue', sans-serif;
  width: 150px;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes[2]}px;
  height: 30px;
  transition: all 250ms linear;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    height: 50px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }

  :hover {
    color: ${p => p.theme.colors.white};
    background-image: linear-gradient(
      to right top,
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
    color: ${p => p.theme.colors.white};
  }
`;

export const StyledBox = styled(Box)`
  position: relative;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  height: 30px;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-family: 'Helvetica Neue', sans-serif;
  cursor: pointer;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  border-radius: 10px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    height: 50px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
  :hover {
    color: ${p => p.theme.colors.white};
    background-image: linear-gradient(
      to right top,
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
`;
