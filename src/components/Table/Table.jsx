import React from 'react';
import styles from './Table.module.scss';
import TableRow from './TableRow/TableRow';

export default function TransactionsTable({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.Table__container}>
        <div className={styles.Table__headerBackground}></div>
        <table className={styles.Table}>
          <thead className={styles.Table__headContainer}>
            <tr>
              <th>date</th>
              <th>type</th>
              <th>category</th>
              <th>comment</th>
              <th data-type="sum">sum</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data.map((data, index) => (
              <TableRow data={data} key={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
