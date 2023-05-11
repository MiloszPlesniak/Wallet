import React, { useEffect } from 'react';
import Media from 'react-media';

import { useDispatch, useSelector } from 'react-redux';

import { fetchTransactions } from 'redux/transaction/thunk';
import { selectTransactions } from 'redux/transaction/selectors';
import { selectError } from 'redux/auth/selectors';
import { selectIsLoading } from 'redux/global/selectors';

import { breakpoints } from 'styles/breakpoints';
import TableMobile from './TableMobile/TableMobile';
import TableDesktop from './TableDesktop/TableDesktop';

export default function TransactionsTable() {
  const dispatch = useDispatch();
  const transactionsData = useSelector(selectTransactions);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const transactions = transactionsData.data || [];

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <>
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
    </>
  );
}
