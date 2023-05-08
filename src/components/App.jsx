import { useEffect, lazy, Suspense } from 'react';
// import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks/useAuth.js';
//import { refreshUser } from 'redux/auth/thunk';
import { CircularProgress } from '@mui/material';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import PrivateRoute from 'pages/PrivateRoute.js';
import RestrictedRoute from 'pages/RestrictedRoute.js';

import 'index.css';

const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashboardPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const TablePage = lazy(() => import('../components/Table/Table'));
const StatisticsPage = lazy(() =>
  import('../components/Statistics/Statistics')
);

export const App = () => {
  const { isRefreshing } = useAuth();
  //const dispatch = useDispatch();

  /*useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);*/

  return isRefreshing ? (
    <CircularProgress
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  ) : (
    <>
      <Helmet titleTemplate="%s - Wallet" defaultTitle="Wallet">
        <meta name="description" content="Wallet" />
      </Helmet>

      {sessionStorage.getItem('welcomeScreenShown') ? null : <WelcomeScreen />}

      <Suspense
        fallback={
          <CircularProgress
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        }
      >
        <Routes>
          <Route path="/" element={<DashboardPage />}>
            <Route
              index
              element={
                <PrivateRoute redirectTo="/login" component={<TablePage />} />
              }
            />

            <Route
              path="home"
              element={
                <PrivateRoute redirectTo="/login" component={<TablePage />} />
              }
            />

            <Route
              path="statistics"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<StatisticsPage />}
                />
              }
            />
          </Route>

          <Route
            path="/registration"
            element={
              <RestrictedRoute
                redirectTo="/home"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
