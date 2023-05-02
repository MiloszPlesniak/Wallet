import { Routes, Route } from 'react-router-dom';
import DiagramTab from './DiagramTab/DiagramTab';
import LoginPage from './LoginPage/LoginPage';
import Table from './Table/Table';
import RegistrationPage from './RegistrationPage/RegistrationPage';
import DashboardPage from './DashboardPage/DashboardPage';
import 'index.css';

export const App = () => {
  return (
    <div className="container">
      <Routes>
        {/* Poniżej priv route który bedzie przenosił do loginu/rejestracji gdy użytkownik nie bedzie zalogowany */}
        <Route
          path="/"
          element={
            <DashboardPage>
              <Table />
            </DashboardPage>
          }
        >
          <Route
            paht="statistics"
            element={
              <DashboardPage>
                <DiagramTab />
              </DashboardPage>
            }
          />
          {/* Przy ścieżkach rejestracji i loginu bedą restrictedRoutu przy zalogowanym uzytkoniku bedą przenościć na dashboard */}
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
};
