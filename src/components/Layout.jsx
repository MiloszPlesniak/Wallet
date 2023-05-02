import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';

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
//<Navigation />
