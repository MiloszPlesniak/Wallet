import React from 'react';
import styles from './TableMobile.module.scss';
import TableMobileRow from './TableMobileRow/TableMobileRow';

function createData(date, type, category, comment, sum) {
  return { date, type, category, comment, sum };
}
const data = [
  createData('04.01.19', '-', 'Other', 'Gift for your wife', 300.0),
  createData('05.01.19', '+', 'Income', 'January bonus', 8000.0),
  createData('07.01.19', '-', 'Car', 'Oil', 1000.0),
  createData('07.01.19', '-', 'Products', 'Vegetables for the week', 280.0),
  createData('07.01.19', '+', 'Income', 'Gift', 1000.0),
];

export default function TableMobile() {
  return (
    <div className={styles.TableMobile}>
      {data.map((data, index) => (
        <TableMobileRow data={data} key={index + 1} />
      ))}
    </div>
  );
}
