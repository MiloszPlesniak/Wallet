import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
