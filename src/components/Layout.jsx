import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import RegistrationPage from './RegistrationPage/RegistrationPage';
import LoginPage from './LoginPage/LoginPage';

const Layout = () => {
  return (
    <>
      <RegistrationPage />
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
