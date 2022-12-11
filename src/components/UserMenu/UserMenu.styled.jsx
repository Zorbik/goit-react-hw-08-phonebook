import { Box } from '../commons/Box';
import styled from 'styled-components';

export const StyledBox = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(
    to left,
    #a6c8fc,
    #8bddff,
    #8dedf0,
    #b0f9da,
    #e1ffc9
  );
  display: flex;
  flex-direction: column;

  align-items: center;
  border-radius: 10px;
  max-width: 320px;
  min-width: 260px;
  padding: ${p => p.theme.space[2]}px;
  box-sizing: border-box;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  border-radius: ${p => p.theme.radii.round};
  cursor: pointer;
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

export const StyledList = styled.ul`
  display: inline-block;
  margin-top: ${p => p.theme.space[5]}px;
`;
