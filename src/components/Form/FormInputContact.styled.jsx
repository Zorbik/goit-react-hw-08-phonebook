import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: ${p => p.theme.sizes.normal};

  gap: ${p => p.theme.space[3]}px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: inline-block;
  height: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[1]}px;
  margin-top: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.blue};
  box-shadow: ${p => p.theme.shadows.normal};
  max-width: ${p => p.theme.sizes.normal};

  :focus-visible {
    outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.blue};
    outline-offset: 1px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  box-sizing: border-box;

  margin-top: ${p => p.theme.space[3]}px;
  max-width: ${p => p.theme.sizes.normal};
  font-size: ${p => p.theme.fontSizes[5]};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  box-shadow: ${p => p.theme.shadows.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.blue};
  border-radius: ${p => p.theme.radii.normal};
  height: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[3]}px;
  cursor: pointer;
  :hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.blue};
  }
  transition: color 250ms linear, background-color 250ms linear;

  &:disabled {
    border-color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};
    :hover {
      background-color: ${p => p.theme.colors.white};
      color: ${p => p.theme.colors.black};
    }
  }
`;
