import React from 'react';
import styles from './TableDesktop.module.scss';
import TableDesktopRow from './TableDesktopRow/TableDesktopRow';
// import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

function createData(date, type, category, comment, sum) {
  return { date, type, category, comment, sum };
}
const data = [
  createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
  createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
  createData('07.01.19', '-', 'Car', 'Oil', 1000.0),
  createData('07.01.19', '-', 'Products', 'Vegetables for the week', 280.0),
  createData('07.01.19', '+', 'Income', 'Gift', 1000.0),
  createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
  createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
  createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
  createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
  createData('07.01.19', '-', 'Car', 'Oil', 1000.0),
  createData('07.01.19', '-', 'Products', 'Vegetables for the week', 280.0),
  createData('07.01.19', '+', 'Income', 'Gift', 1000.0),
  createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
  createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
  createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
  createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
  createData('07.01.19', '-', 'Car', 'Oil', 1000.0),
  createData('07.01.19', '-', 'Products', 'Vegetables for the week', 280.0),
  createData('07.01.19', '+', 'Income', 'Gift', 1000.0),
  createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
  createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
];

export default function TransactionsTable() {


  
  return (
    <div className={styles.container}>
      <div className={styles.Table__container}>
        <div className={styles.Table__headerBackground}></div>
        <table className={styles.Table}>
          <thead className={styles.Table__headContainer}>
            <tr>
              <th data-type="date">date</th>
              <th data-type="type">type</th>
              <th>category</th>
              <th data-type="comment">comment</th>
              <th data-type="sum">sum</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data.map((data, index) => (
              <TableDesktopRow data={data} key={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
