import React from 'react';
import Media from 'react-media';
import { breakpoints } from 'styles/breakpoints';
import { Helmet } from 'react-helmet';
import Header from 'components/Header/Header';
import styles from './DashboardPage.module.scss';
import DashboardMobile from './DashboardMobile/DashboardMobile';
import DashboardTabletDesktop from './DashboardTabletDesktop/DashboardTabletDesktop';
import ModalEditTransaction from 'components/ModalEditTransaction/ModalEditTransaction';
import { useSelector } from 'react-redux';
import { selectModalEditTransactionType } from 'redux/global/selectors';
const DashboardPage = () => {
  const modalType = useSelector(selectModalEditTransactionType);
  return (
    <>
      <Helmet title="Home">
        <meta name="description" content="Wallet finance App" />
      </Helmet>

      <Media queries={breakpoints}>
        {matches => (
          <div className={styles.Dashboard}>
            <Header />
            {matches.mobile && <DashboardMobile />}
            {(matches.desktop || matches.tablet) && <DashboardTabletDesktop />}
          </div>
        )}
      </Media>
      <ModalEditTransaction typeOfTransaction={modalType} />
    </>
  );
};

export default DashboardPage;
