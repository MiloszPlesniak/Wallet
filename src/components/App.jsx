import { Routes, Route } from 'react-router-dom';
//import Layout from './Layout';
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
        {/* Poniżej priv route który bedzie przenosił do loginu/rejestracji gdy użytkownik nie bedzie zalogowany */}
        <Route path="/" element={<DashboardPage />}>
          <Route path="home" element={<HomeTab />} />
          <Route paht="statistics" element={<Table />} />
          {/* Przy ścieżkach rejestracji i loginu bedą restrictedRoutu przy zalogowanym uzytkoniku bedą przenościć na dashboard */}
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
};
