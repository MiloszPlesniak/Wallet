import React, { Suspense, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from '../DashboardTabletDesktop/DashboardTabletDesktop.module.scss';
import Media from 'react-media';
import Currency from 'components/Currency/Currency';
import Balance from 'components/Balance/Balance';
import Divider from '@mui/material/Divider';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

const DashboardDivider = styled(Divider)(({ theme }) => ({
  borderRightColor: 'e7e5F2',
  borderRightWidth: '1px',
  boxShadow: '1px 0px rgba(255, 255, 255, 0.6),-1px 0px rgba(0, 0, 0, 0.05)',
}));

export default function DashboardTabletDesktop() {
  const location = useLocation();
  const pathname = location.pathname;
  const [currentLocation, setCurrentLocation] = useState('');
  useEffect(() => {
    setCurrentLocation(pathname);
  }, [pathname]);
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        tablet: '(min-width: 768px) and (max-width: 1279px)',
        desktop: '(min-width: 1280px)',
      }}
    >
      {matches => (
        <div className={styles.Dashboard__bg}>
          <div className={styles.Dashboard__bgBlur} />
          <div className={styles.Dashboard__container}>
            <div className={styles.Dashboard__main}>
              <div className={styles.Dashboard__balanceCurrency}>
                <div className={styles.Dashboard__navBalance}>
                  <div className={styles.Dashboard__navContainer}>
                    <Navigation />
                  </div>
                  <div className={styles.Dashboard__balanceContainer}>
                    <Balance />
                  </div>
                </div>
                <div className={styles.Dashboard__currencyContainer}>
                  <Currency />
                </div>
              </div>
              {matches.desktop && (
                <DashboardDivider orientation="vertical" flexItem />
              )}
              <div className={styles.Dashboard__contentContainer}>
                <Suspense
                  fallback={
                    <CircularProgress
                      style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 2,
                      }}
                    />
                  }
                >
                  <Outlet />
                </Suspense>
                {currentLocation === '/home' && <ButtonAddTransactions />}
              </div>
              <div className={styles.Dashboard__footerContainer}>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      )}
    </Media>
  );
}
