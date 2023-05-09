import React, { Suspense, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from '../DashboardMobile/DashboardMobile.module.scss';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from 'components/Footer/Footer';

export default function DashboardMobile() {
  const location = useLocation();
  const pathname = location.pathname;
  const [currentLocation, setCurrentLocation] = useState('');

  const [showCurrency, setShowCurrency] = useState(false);
  const handleShowCurrency = () => {
    setShowCurrency(true);
  };
  const handleCloseCurrency = () => {
    setShowCurrency(false);
  };

  useEffect(() => {
    setCurrentLocation(pathname);
    setShowCurrency(false);
  }, [pathname]);

  return (
    <div className={styles.Dashboard__container}>
      <div className={styles.Dashboard__main}>
        <div className={styles.Dashboard__navContainer}>
          <Navigation
            handleShowCurrency={handleShowCurrency}
            handleCloseCurrency={handleCloseCurrency}
          />
        </div>
        {showCurrency ? (
          <div className={styles.Dashboard__contentContainer}>
            <Currency />

          </div>
        ) : (
          <div className={styles.Dashboard__contentContainer}>
            {currentLocation === '/home' && <Balance />}
            <Suspense
              fallback={
                <CircularProgress sx={{ color: 'rgb(248, 122, 97)' }} />
              }
            >
              <Outlet />
            </Suspense>
          </div>
        )}
      </div>
      <div className={styles.Dashboard__footerContainer}>
        <Footer />

      </div>
    </div>
  );
}
