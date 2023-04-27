import { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import styles from './Currency.module.scss';

const Currency = () => {
  const [currencyUSD, setCurrencyUSD] = useState({});
  const [currencyEUR, setCurrencyEUR] = useState({});

  useEffect(() => {
    fetch('https://api.nbp.pl/api/exchangerates/rates/c/usd')
      .then(response => response.json())
      .then(data => setCurrencyUSD(data));

    fetch('https://api.nbp.pl/api/exchangerates/rates/c/eur')
      .then(response => response.json())
      .then(data => setCurrencyEUR(data));
  }, []);

  return (
    <TableContainer
      sx={{ width: '393px', height: '331px' }}
      className={styles.Currency__container}
    >
      <Table aria-label="currency table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Currency</TableCell>
            <TableCell align="center">Purchase</TableCell>
            <TableCell align="center">Sale</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={currencyUSD.code}>
            <TableCell align="center" component="th" scope="row">
              {currencyUSD.code ? currencyUSD.code : <Skeleton />}
            </TableCell>
            <TableCell align="center">
              {currencyUSD.rates ? currencyUSD.rates[0].bid : <Skeleton />}
            </TableCell>
            <TableCell align="center">
              {currencyUSD.rates ? currencyUSD.rates[0].ask : <Skeleton />}
            </TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            key={currencyEUR.code}
          >
            <TableCell align="center" component="th" scope="row">
              {currencyEUR.code ? currencyEUR.code : <Skeleton />}
            </TableCell>
            <TableCell align="center">
              {currencyEUR.rates ? currencyEUR.rates[0].bid : <Skeleton />}
            </TableCell>
            <TableCell align="center">
              {currencyEUR.rates ? currencyEUR.rates[0].ask : <Skeleton />}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Currency;
