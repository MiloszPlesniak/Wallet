import React from 'react';
import Media from 'react-media';
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
          {matches.mobile && <DashboardMobile />}
          {(matches.desktop || matches.tablet) && <DashboardTabletDesktop />}
        </div>
      )}
    </Media>
    </>
  );
};

export default DashboardPage;
