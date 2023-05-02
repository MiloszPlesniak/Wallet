import { Routes, Route } from 'react-router-dom';
import ModalAddTransaction from './ModalAddTransaction/ModalAddTransaction';
import RegistrationPage from './RegistrationPage/RegistrationPage';
import DashboardPage from './DashboardPage/DashboardPage';
import 'index.css';

export const App = () => {
  return (
    <div className="container">
      <ModalAddTransaction />
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          {/* Przy ścieżkach rejestracji i loginu bedą restrictedRoutu przy zalogowanym uzytkoniku bedą przenościć na dashboard */}
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<RegistrationPage />} />
          {/* Poniżej priv route który bedzie przenosił do loginu/rejestracji gdy użytkownik nie bedzie zalogowany */}
        </Route>
      </Routes>
    </div>
  );
};
