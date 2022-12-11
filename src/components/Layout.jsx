import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box, Appbar } from '../components';

export const Layout = () => {
  return (
    <Box>
      <Appbar></Appbar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
