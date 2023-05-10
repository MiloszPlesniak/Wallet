import React from 'react';
import Media from 'react-media';
import { breakpoints } from 'styles/breakpoints';
import { Helmet } from 'react-helmet';
import Header from 'components/Header/Header';
import styles from './DashboardPage.module.scss';
import DashboardMobile from './DashboardMobile/DashboardMobile';
import DashboardTabletDesktop from './DashboardTabletDesktop/DashboardTabletDesktop';

const DashboardPage = () => {
  return (
    <>
      <Helmet title="Home">
        <meta name="description" content="Home" />
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
    </>
  );
};

export default DashboardPage;
