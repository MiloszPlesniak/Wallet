import React from 'react';
import styles from './Balance.module.scss';

export default function Balance() {
  return (
    <div className={styles.Balance__container}>
      <p className={styles.Balance__title}>Your Balance</p>
      <p>
        <span className={styles.Balance__currency}>$</span>
        <span className={styles.Balance__number}> 24 000.00</span>
      </p>
    </div>
  );
}
