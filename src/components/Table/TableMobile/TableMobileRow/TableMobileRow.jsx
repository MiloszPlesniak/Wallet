import React from 'react';

import { useDispatch } from 'react-redux';

import { changeIsModalEditTransactionOpen } from 'redux/global/slice';

import { deleteTransactions } from 'redux/transaction/thunk';

import ModalEditTransaction from 'components/ModalEditTransaction/ModalEditTransaction';

import Button from '@mui/material/Button';
import EditIcon from '../../EditIcon/EditIcon';
import { styled } from '@mui/material/styles';
import styles from './TableMobileRow.module.scss';

const EditButton = styled(Button)(({ theme }) => ({
  height: 26,
  marginBottom: 0,
  padding: '0px',
  gap: 8,
  fontFamily: 'Circe',
  fontSize: 14,
  textTransform: 'capitalize',
  borderRadius: 4,
  backgroundColor: 'transparent',
  color: '#000',
}));

const DeleteButton = styled(Button)(({ theme }) => ({
  marginBottom: 0,
  fontFamily: 'Circe',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '1em',
  textTransform: 'capitalize',
  width: '67px',
  height: '26px',
  padding: '4px 12px',
}));

export default function TableMobileRow({ transaction }) {
  const dispatch = useDispatch();

  const openModalEditTransaction = () => {
    dispatch(changeIsModalEditTransactionOpen());
  };

  const handleDeleteTransaction = id => {
    dispatch(deleteTransactions(id));
  };

  const dynamicValueCss =
    transaction.type === '-' ? styles.expense : styles.income;

  const dynamicStripeCss =
    transaction.type === '-'
      ? styles.TableRowMobile__stripeExpense
      : styles.TableRowMobile__stripeIncome;

  return (
    <>
      <div className={styles.TableRowMobile}>
        <div className={styles.TableRowMobile__element}>
          <span className={styles.TableRowMobile__key}>Date</span>
          <span className={styles.TableRowMobile__value}>
            {transaction.date}
          </span>
        </div>
        <div className={styles.TableRowMobile__element}>
          <span className={styles.TableRowMobile__key}>Type</span>
          <span className={styles.TableRowMobile__value}>
            {' '}
            {transaction.type}
          </span>
        </div>
        <div className={styles.TableRowMobile__element}>
          <span className={styles.TableRowMobile__key}>Category</span>
          <span className={styles.TableRowMobile__value}>
            {transaction.category}
          </span>
        </div>
        <div className={styles.TableRowMobile__element}>
          <span className={styles.TableRowMobile__key}> Comment</span>
          <span className={styles.TableRowMobile__value}>
            {transaction.comment}
          </span>
        </div>
        <div className={styles.TableRowMobile__element}>
          <span className={styles.TableRowMobile__key}>Sum</span>
          <span className={(styles.TableRowMobile__value, dynamicValueCss)}>
            {transaction.amount}
          </span>
        </div>
        <div className={styles.TableRowMobile__element}>
          <DeleteButton
            disableElevation
            variant="contained"
            type="button"
            onClick={handleDeleteTransaction}
          >
            <span className={styles.DeleteButton__Text}>Delete</span>
          </DeleteButton>
          <EditButton
            type="button"
            aria-label="edit"
            onClick={openModalEditTransaction}
          >
            <EditIcon />
            <span className={styles.EditButton__Text}>Edit</span>
          </EditButton>
        </div>
        <div className={dynamicStripeCss} />
      </div>
      <ModalEditTransaction />
    </>
  );
}
