import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box, Appbar } from '../components';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <Container>
      <Appbar></Appbar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

const Container = styled(Box)`
  box-sizing: border-box;
  padding: 0 ${p => p.theme.space[3]}px;
  margin: 0 auto;
  @media screen and (min-width: ${p => p.theme.sizes.mobile}) {
    width: 480px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    width: 768px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    width: 1280px;
  }
`;
