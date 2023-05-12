import React from 'react';
import styles from './TableDesktop.module.scss';
import TableDesktopRow from './TableDesktopRow/TableDesktopRow';

export default function TransactionsTable({ transactions, isLoading, error }) {


  return (
    <>
      <div className={styles.container}>
        <div className={styles.Table__container}>
          <div className={styles.Table__headerBackground}></div>

          {isLoading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {transactions.length === 0 && !isLoading && (
            <div>No contacts to show</div>
          )}
          {transactions.length > 0 && (
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
                {transactions.map(transaction => {
                  return (
                    <TableDesktopRow
                      transaction={transaction}
                      key={transaction._id}
                    />
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
