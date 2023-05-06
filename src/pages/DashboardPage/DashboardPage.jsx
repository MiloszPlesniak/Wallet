import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './DashboardPage.module.scss';
import Media from 'react-media';
import Header from 'components/Header/Header';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const DashboardDivider = styled(Divider)(({ theme }) => ({
  borderRightColor: 'e7e5F2',
  borderRightWidth: '1px',
  boxShadow: '1px 0px rgba(255, 255, 255, 0.6),-1px 0px rgba(0, 0, 0, 0.05)',
}));

const DashboardPage = () => {
  return (
    <>
      <Media
        queries={{
          mobile: '(max-width: 767px)',
          tablet: '(min-width: 768px) and (max-width: 1279px)',
          desktop: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <div className={styles.Dashboard}>
            <Header />
            <Navigation />

            {matches.desktop && (
              <div className={styles.Dashboard__container}>
                <div>
                  <div className={styles.Dashboard__backgroundElipse1} />
                  <div className={styles.Dashboard__backgroundElipse2} />
                </div>
                <div className={styles.Dashboard__main}>
                  <div className={styles.Dashboard__gridRow}>
                    <div className={styles.Dashboard__gridColumn}>
                      <Balance />
                      <Currency />
                    </div>
                    <DashboardDivider orientation="vertical" flexItem />
                    <Outlet />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Media>
    </>
  );
};

export default DashboardPage;
/*<div className={styles.Dashboard__gridColumn}>
                      <Table data={data} />
                    </div>*/
