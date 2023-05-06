import React, { Suspense, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from '../DashboardPage.module.scss';
import Balance from 'components/Balance/Balance';
import Navigation from 'components/Navigation/Navigation';
import CircularProgress from '@mui/material/CircularProgress';

export default function DashboardMobile() {
  const location = useLocation();
  const pathname = location.pathname;
  const [currentLocation, setCurrentLocation] = useState('');

  useEffect(() => {
    setCurrentLocation(pathname);
  }, [pathname]);
  console.log({ currentLocation });

  return (
    <div className={styles.Dashboard__container}>
      <div className={styles.Dashboard__main}>
        <div className={styles.Dashboard__navContainer}>
          <Navigation />
        </div>
        <div className={styles.Dashboard__contentContainer}>
          {currentLocation === '/home' && <Balance />}
          <Suspense
            fallback={<CircularProgress sx={{ color: 'rgb(248, 122, 97)' }} />}
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
