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
  const [catgory, setCategory] = useState([]);
  const dispatch = useDispatch();
  const { date } = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const getCagetory = async date => {
      const category = await dispatch(fetchTransacionsOfPeriot(date));
      if (!category.payload.lenght > 1) {
        setCategory(category.payload);
      }
      setCategory([]);
    };
    getCagetory(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const returnTransactionsByType = (arr, transactionType) => {
  //   const TransactionsByType = arr.filter(
  //     item => item.type === transactionType
  //   );
  //   return TransactionsByType;
  // };

  // const returnUniqueCategories = arr => {
  //   const allCategories = arr.map(item => item.category);
  //   const uniqueCategories = allCategories.filter(
  //     (category, index, array) => array.indexOf(category) === index
  //   );
  //   return uniqueCategories;
  // };

  // const returnOverallSumByCategory = (arr = [], category = '') =>
  //   arr.reduce(
  //     (prev, { sum, category: cat }) => (cat === category ? prev + sum : prev),
  //     0
  //   );

  // const createSum = (dataArr, categoryArr) => {
  //   let dataTable = [];
  //   for (const category of categoryArr) {
  //     dataTable.push(returnOverallSumByCategory(dataArr, category));
  //   }
  //   return dataTable;
  // };

  // const expenseCategories = returnUniqueCategories(
  //   returnTransactionsByType(data, '-')
  // );

  // const returnSum = arr => {
  //   let sum = 0;
  //   for (const item of arr) {
  //     sum += item.sum;
  //   }
  //   return sum;
  // };

  // const expenseData = returnTransactionsByType(data, '-');
  // // console.log({ expenseData });

  // const incomeData = returnTransactionsByType(data, '+');
  // // console.log({ incomeData });

  // const expenseOverall = returnSum(expenseData);
  // // console.log({ expenseOverall });

  // const incomeOverall = returnSum(incomeData);
  // // console.log({ expenseOverall });

  // const filteredData = {
  //   expenseCategories,
  //   expenseData: createSum(data, expenseCategories),
  // };

  // // console.log({ filteredData });

  // const diagramData = {
  //   expenseData,
  //   expenseOverall,
  //   incomeOverall,
  // };
  // // const fdata = catgory.map(item => item.name);

  // console.log(filteredData);
  console.log(catgory);
  const filteredData = {
    expenseCategories: catgory.map(item => item.name),
    expenseData: catgory.map(item => item.amount),
  };

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
                  <DataFilter />
                </div>
                <div className={styles.DiagramTab__container}>
                  <DiagramTab diagramData={catgory} />
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
