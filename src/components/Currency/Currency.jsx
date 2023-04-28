import { useState, useEffect } from 'react';
import axios from 'axios';
import getSymbolFromCurrency from 'currency-symbol-map';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
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
              <th>Purchase</th>
              <th>Sale</th>
            </tr>
          </thead>

          <tbody>
            {currency?.map(currency => (
              <Tooltip key={currency.code} title={currency.currency} arrow>
                <tr
                  key={currency.code}
                  onClick={event =>
                    event.currentTarget.classList.toggle(
                      styles.Currency__row_selected
                    )
                  }
                >
                  <td>
                    {currency.code}
                    {getSymbolFromCurrency(currency.code) !== undefined &&
                      getSymbolFromCurrency(currency.code) !==
                        currency.code && (
                        <span className={styles.Currency__symbol}>
                          {'(' + getSymbolFromCurrency(currency.code) + ')'}
                        </span>
                      )}
                  </td>
                  <td>{currency.bid.toFixed(4)}</td>
                  <td>{currency.ask.toFixed(4)}</td>
                </tr>
              </Tooltip>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Currency;
