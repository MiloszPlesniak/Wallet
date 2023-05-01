import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import RegistrationPage from './RegistrationPage/RegistrationPage';
import DashboardPage from './DashboardPage/DashboardPage';
import 'index.css';

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Przy ścieżkach rejestracji i loginu bedą restrictedRoutu przy zalogowanym uzytkoniku bedą przenościć na dashboard */}
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<RegistrationPage />} />
          {/* Poniżej priv route który bedzie przenosił do loginu/rejestracji gdy użytkownik nie bedzie zalogowany */}
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </div>
  );
};
