import React, { useEffect } from 'react';

import { selectIsLoading } from 'redux/global/selectors';
import { selectUser } from 'redux/auth/selectors';
import { selectTransactions } from 'redux/transaction/selectors';
import { fetchCurrentUser } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Balance.module.scss';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function Balance() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const transactions = useSelector(selectTransactions);
  useEffect(() => {
    dispatch(fetchCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  return (
    <div className={styles.Balance__container}>
      <p className={styles.Balance__title}>Your Balance</p>
      <div>
        {isLoading ? (
          <Box
            component="span"
            sx={{ display: 'block', alignItems: 'center', height: 24 }}
          >
            <LinearProgress sx={{ backgroundColor: '#f87a61' }} />
          </Box>
        ) : (
          <div className={styles.Balance__textContainer}>
            <span className={styles.Balance__number}>{user.balance}</span>
            <span className={styles.Balance__currency}>zł</span>
          </div>
        )}
      </div>
    </div>
  );
}
