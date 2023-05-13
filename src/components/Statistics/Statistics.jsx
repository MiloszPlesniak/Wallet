import { Helmet } from 'react-helmet';
import Chart from 'components/Chart/Chart';
import DiagramTab from 'components/DiagramTab/DiagramTab';
import DataFilter from 'components/DataFilter/DataFilter';
import styles from './Statistics.module.scss';
import Media from 'react-media';
import { breakpoints } from 'styles/breakpoints';
// import db from 'db/db';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchTransacionsOfPeriot } from 'redux/transaction/thunk';

// import { all } from 'axios';

// const data = db.transactions;

const Statistics = () => {
  const [category, setCategory] = useState({
    categoriesSummary: [],
    expenseSummary: 0,
    incomeSummary: 0,
    month: 0,
    periodTotal: 0,
    year: 0,
  });
  const initDate = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };
  const [month, setMonth] = useState(initDate.month);
  const [year, setYear] = useState(initDate.year);
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const getCagetory = async (month, year) => {
      const category = await dispatch(
        fetchTransacionsOfPeriot({ month, year })
      );
      setCategory(category.payload);
    };
    getCagetory(month, year);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);
  const filteredData = {
    expenseCategories: category.categoriesSummary.map(item => item.name),
    expenseData: category.categoriesSummary.map(item => item.total),
  };
  // const filteredData = {
  //   expenseCategories: [],
  //   expenseData: [],
  // };

  return (
    <>
      <Helmet title="Statistics">
        <meta
          name="description"
          content="Wallet finance App - Statistics page"
        />
      </Helmet>
      <Media queries={breakpoints}>
        {matches => (
          <>
            <div>
              {matches.desktop && (
                <h2 className={styles.Statistics__title}>Statistics</h2>
              )}
            </div>
            <div className={styles.Statistics__container}>
              <div className={styles.Chart__Container}>
                {matches.tablet && (
                  <h2 className={styles.Statistics__title}>Statistics</h2>
                )}
                <Chart filteredData={filteredData} />
              </div>
              <div className={styles.DataFilter__container}>
                <div>
                  <DataFilter
                    month={month}
                    year={year}
                    setMonth={setMonth}
                    setYear={setYear}
                  />
                </div>
                <div className={styles.DiagramTab__container}>
                  <DiagramTab diagramData={category} />
                </div>
              </div>
            </div>
          </>
        )}
      </Media>
    </>
  );
};

export default Statistics;
