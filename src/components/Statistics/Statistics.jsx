import { Helmet } from 'react-helmet';
import Chart from 'components/Chart/Chart';
import DiagramTab from 'components/DiagramTab/DiagramTab';

import style from "./Statistics.module.scss"

const Statistics = () => {
  return (
    <>
      <Helmet title="Statistics">
        <meta name="description" content="Statistics" />
      </Helmet>
      
            <h2 className={style.Statistics__title}>Statistics</h2>

          <div className={style.Statistics__container}>
                <div className={style.Chart}>
                <Chart/>
                </div>
                <div className={style.DiagramTab}>
                  <DiagramTab />
                </div>
        </div>
     
    </>
  );
};

export default Statistics;
