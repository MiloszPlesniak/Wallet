import React from 'react';
import styles from './DashboardPage.module.scss';
import Media from 'react-media';
import Header from 'components/Header/Header';
import Currency from 'components/Currency/Currency';
import Balance from 'components/Balance/Balance';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { default as Table } from 'components/Table/Table';

function createData(date, type, category, comment, sum) {
  return { date, type, category, comment, sum };
}

const DashboardDivider = styled(Divider)(({ theme }) => ({
  borderRightColor: 'e7e5F2',
  borderRightWidth: '1px',
  boxShadow: '1px 0px rgba(255, 255, 255, 0.6),-1px 0px rgba(0, 0, 0, 0.05)',
}));

const data = [
  createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
  createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
  createData('07.01.19', '-', 'Car', 'Oil', 1000.0),
  createData('07.01.19', '-', 'Products', 'Vegetables for the week', 280.0),
  createData('07.01.19', '+', 'Income', 'Gift', 1000.0),
];

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
                    <div className={styles.Dashboard__gridColumn}>
                      <Table data={data} />
                    </div>
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
