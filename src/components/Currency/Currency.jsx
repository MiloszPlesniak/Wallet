import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Currency.module.scss';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCurrency = async () => {
    try {
      const response = await axios.get(
        'https://api.nbp.pl/api/exchangerates/tables/c'
      );
      setCurrency(response.data[0].rates);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getCurrency();
  }, []);

  return (
    <div className={styles.Currency__container}>
      <div className={styles.Currency__bgGraph} />
      {isLoading && (
        <div className={styles.Currency__spinnerContainer}>
          <CircularProgress className={styles.Currency__spinner} />
        </div>
      )}

      {error && <p>{error.message}</p>}

      {!isLoading && !error && (
        <table className={styles.Currency__table}>
          <thead>
            <tr>
              <th>Currency</th>
              <th data-type="bid">Purchase</th>
              <th data-type="ask">Sale</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {currency?.map(currency => (
              <tr
                key={currency.code}
                onClick={event =>
                  event.currentTarget.classList.toggle(
                    styles.Currency__row_selected
                  )
                }
              >
                <td>{currency.code}</td>
                <td data-type="bid">{currency.bid.toFixed(4)}</td>
                <td data-type="ask">{currency.ask.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Currency;
