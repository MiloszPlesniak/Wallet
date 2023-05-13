import React, { useEffect } from 'react';
import Media from 'react-media';

import { useDispatch, useSelector } from 'react-redux';

import { fetchTransactions } from 'redux/transaction/thunk';
import { selectTransactions } from 'redux/transaction/selectors';
import styles from './Table.module.scss';

import { breakpoints } from 'styles/breakpoints';
import TableMobile from './TableMobile/TableMobile';
import TableDesktop from './TableDesktop/TableDesktop';

export default function TransactionsTable() {
  const dispatch = useDispatch();
  const transactionsData = useSelector(selectTransactions);

  const transactions = transactionsData || [];

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <>
      {transactions.length === 0 ? (
        <div className={styles.Table__text}>
          {'No Transactions to show. Add some below!'}
        </div>
      ) : (
        <Media queries={breakpoints}>
          {matches => (
            <>
              {matches.mobile && <TableMobile transactions={transactions} />}
              {(matches.desktop || matches.tablet) && (
                <TableDesktop transactions={transactions} />
              )}
            </>
          )}
        </Media>
      )}
    </>
  );
}
