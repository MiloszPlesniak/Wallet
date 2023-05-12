import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteTransactions } from 'redux/transaction/thunk';

import { changeIsModalEditTransactionOpen } from 'redux/global/slice';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '../../EditIcon/EditIcon';
import { styled } from '@mui/material/styles';
import styles from './TableDesktopRow.module.scss';

const DeleteButton = styled(Button)(({ theme }) => ({
  margin: 0,
  fontFamily: 'Circe',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '1em',
  textTransform: 'capitalize',
  width: '67px',
  height: '26px',
  padding: '4px 12px',
}));

export default function TableDesktopRow({ transaction }) {
  const dispatch = useDispatch();

  const data = {
    day: new Date(transaction.date).getDate(),
    month: new Date(transaction.date).getMonth() + 1,
    year: new Date(transaction.date).getFullYear(),
  };

  const openModalEditTransaction = type => {
    dispatch(changeIsModalEditTransactionOpen(type));
  };

  const handleDeleteContact = id => {
    dispatch(deleteTransactions(id));
  };

  const dynamicCss = transaction.type === '-' ? styles.expense : styles.income;

  return (
    <>
      <tr>
        <td data-type="date">{`${data.day}.${data.month}.${data.year}`}</td>
        <td data-type="type">{transaction.type}</td>
        <td>{transaction.category}</td>
        <td data-type="comment">{transaction.comment}</td>
        <td data-type="sum" className={dynamicCss}>
          {transaction.amount}
        </td>
        <td data-type="edit">
          <div className={styles.stack}>
            <IconButton
              type="button"
              aria-label="edit"
              onClick={() => {
                openModalEditTransaction(transaction.type);
              }}
            >
              <EditIcon className={styles.editIcon} />
            </IconButton>
            <DeleteButton
              disableElevation
              variant="contained"
              type="button"
              onClick={handleDeleteContact}
            >
              Delete
            </DeleteButton>
          </div>
        </td>
      </tr>
    </>
  );
}
