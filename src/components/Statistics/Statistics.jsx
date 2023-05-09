import { Helmet } from 'react-helmet';
import Chart from 'components/Chart/Chart';
import DiagramTab from 'components/DiagramTab/DiagramTab';
import styles from './Statistics.module.scss';
import Media from 'react-media';
import db from 'db/db';

// import { all } from 'axios';

console.log({ db });

const data = db.transactions;

console.log({ data });

const Statistics = () => {
  const returnTransactionsByType = (arr, transactionType) => {
    const TransactionsByType = arr.filter(
      item => item.type === transactionType
    );
    return TransactionsByType;
  };

  const returnUniqueCategories = arr => {
    const allCategories = arr.map(item => item.category);
    const uniqueCategories = allCategories.filter(
      (category, index, array) => array.indexOf(category) === index
    );
    return uniqueCategories;
  };

  const returnOverallSumByCategory = (arr = [], category = '') =>
    arr.reduce(
      (prev, { sum, category: cat }) => (cat === category ? prev + sum : prev),
      0
    );

  const createSum = (dataArr, categoryArr) => {
    let dataTable = [];
    for (const category of categoryArr) {
      dataTable.push(returnOverallSumByCategory(dataArr, category));
    }
    return dataTable;
  };

  const expenseCategories = returnUniqueCategories(
    returnTransactionsByType(data, '-')
  );

  const returnSum = arr => {
    let sum = 0;
    for (const item of arr) {
      sum += item.sum;
    }
    return sum;
  };

  const expenseData = returnTransactionsByType(data, '-');
  // console.log({ expenseData });

  const incomeData = returnTransactionsByType(data, '+');
  // console.log({ incomeData });

  const expenseOverall = returnSum(expenseData);
  // console.log({ expenseOverall });

  const incomeOverall = returnSum(incomeData);
  // console.log({ expenseOverall });

  const filteredData = {
    expenseCategories,
    expenseData: createSum(data, expenseCategories),
  };

  // console.log({ filteredData });
  const diagramData = {
    expenseData,
    expenseOverall,
    incomeOverall,
  };

  return (
    <>
      <Helmet title="Statistics">
        <meta name="description" content="Statistics" />
      </Helmet>
      <Media
        queries={{
          mobile: '(max-width: 767px)',
          tablet: '(min-width: 768px) and (max-width: 1279px)',
          desktop: '(min-width: 1280px)',
        }}
      >
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
              <div className={styles.DiagramTab__container}>
                <DiagramTab diagramData={diagramData} />
              </div>
            </div>
          </>
        )}
      </Media>
    </>
  );
};

export default Statistics;
