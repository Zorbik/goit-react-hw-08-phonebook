import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout, PrivateRoute, PublicRoute } from './components';
import { Contacts, Home, Login, Page404, Registration } from './pages';
import { getCurrentUser } from './redux/userAuthOperations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={false}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="registration"
              element={
                <PublicRoute>
                  <Registration />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
