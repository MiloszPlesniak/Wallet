import React from 'react';
//import { useEffect, lazy, Suspense } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LoginPage from '../pages/LoginPage/LoginPage';
import Statistics from '../components/Statistics/Statistics';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import PrivateRoute from 'pages/PrivateRoute.js';
import RestrictedRoute from 'pages/RestrictedRoute.js';
import { useAuth } from 'hooks/useAuth.js';
//import { refreshUser } from 'redux/auth/operations';
import Table from './Table/Table';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import 'index.css';

export const App = () => {
  const { isRefreshing } = useAuth();
  //const dispatch = useDispatch();

  /*useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);*/

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Helmet titleTemplate="%s - Wallet" defaultTitle="Wallet">
        <meta name="description" content="Wallet" />
      </Helmet>
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route
            index
            element={<PrivateRoute redirectTo="/login" component={<Table />} />}
          />

          <Route
            path="home"
            element={<PrivateRoute redirectTo="/login" component={<Table />} />}
          />

          <Route
            path="statistics"
            element={
              <PrivateRoute redirectTo="/login" component={<Statistics />} />
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
    </>
  );
};
