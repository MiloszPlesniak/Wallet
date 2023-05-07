import { Helmet } from 'react-helmet';
import Chart from 'components/Chart/Chart';
import HomeTab from 'components/HomeTab/HomeTab';

const Statistics = () => {
  return (
    <>
      <Helmet title="Statistics">
        <meta name="description" content="Statistics" />
      </Helmet>
      <Chart />
      <HomeTab />
    </>
  );
};

export default Statistics;
