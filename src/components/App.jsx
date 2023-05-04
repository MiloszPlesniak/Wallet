import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import HomeTab from './HomeTab/HomeTab';
import Table from './Table/Table';
import DashboardPage from './DashboardPage/DashboardPage';
import 'index.css';




export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route path="home" element={<Table />} />
          <Route paht="statistics" element={<HomeTab />} />
        </Route>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </div>
  );
};
