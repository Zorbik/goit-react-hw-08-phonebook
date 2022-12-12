import { lazy } from 'react';

export const Home = lazy(() => import('./HomePage/HomePage'));
export const Contacts = lazy(() => import('./ContactsPage/ContactsPage'));
export const Login = lazy(() => import('./LoginPage/LoginPage'));
export const Registration = lazy(() =>
  import('./RegistrationPage/RegistrationPage')
);
// export const Cast = lazy(() => import('./MovieDetailsPage/Cast'));
export const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));
