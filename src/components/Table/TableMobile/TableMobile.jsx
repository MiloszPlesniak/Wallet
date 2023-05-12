import React from 'react';
import styles from './TableMobile.module.scss';
import TableMobileRow from './TableMobileRow/TableMobileRow';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

export default function TableMobile({ transactions }) {
  return (
    <div className={styles.TableMobile}>
      {transactions.map(transaction => {
        return (
          <TableMobileRow transaction={transaction} key={transaction.id} />
        );
      })}
      <ButtonAddTransactions />
    </div>
  );
}
