import React, { useState } from 'react';
import styles from './Balance.module.scss';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function Balance() {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.Balance__container}>
      <p className={styles.Balance__title}>Your Balance</p>
      <p>
        {isLoading ? (
          <Box
            component="span"
            sx={{ display: 'block', alignItems: 'center', height: 24 }}
          >
            <LinearProgress sx={{ backgroundColor: '#f87a61' }} />
          </Box>
        ) : (
          <>
            <span className={styles.Balance__currency}>$</span>
            <span className={styles.Balance__number}>24 000.00</span>
          </>
        )}
      </p>
    </div>
  );
}
