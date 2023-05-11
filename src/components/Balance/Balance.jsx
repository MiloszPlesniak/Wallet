import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import styles from './Balance.module.scss';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function Balance() {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
            <span className={styles.Balance__currency}>zł</span>
            <span className={styles.Balance__number}>{user.balance}</span>
          </div>
        )}
      </div>
    </div>
  );
}
