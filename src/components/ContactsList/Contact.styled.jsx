import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  justify-content: space-between;
  align-items: center;
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[1]}px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${p => p.theme.shadows.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.blue};
  border-radius: ${p => p.theme.radii.normal};
  height: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  margin: ${p => p.theme.space[1]}px;
  padding: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  :hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.blue};
  }
  transition: color 250ms linear, background-color 250ms linear;
`;
