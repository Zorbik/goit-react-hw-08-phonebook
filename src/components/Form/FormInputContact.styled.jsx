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
  margin: ${p => p.theme.space[1]}px;

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

export const StyledButton = styled.button`
  /* display: flex;
  justify-content: center; */
  border: none;
  background-color: transparent;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-family: 'Helvetica Neue', sans-serif;
  cursor: pointer;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

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
