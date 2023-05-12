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
    transaction.type === 'EXPENSE' ? styles.expense : styles.income;

  const dynamicStripeCss =
    transaction.type === 'EXPENSE'
      ? styles.TableRowMobile__stripeExpense
      : styles.TableRowMobile__stripeIncome;

  const date = new Date(transaction.transactionDate);
  const dayIn2Digit = String(date.getDate()).padStart(2, '0');
  const monthIn2digit = String(date.getMonth() + 1).padStart(2, '0');
  const yearIn2Digit =
    date.getYear() > 100 ? date.getYear() - 100 : date.getYear();

  const data = {
    day: dayIn2Digit,
    month: monthIn2digit,
    year: yearIn2Digit,
  };

  const getCategoryName = () => {
    const categoryData = transactionsCategories.filter(
      item => item.id === transaction.categoryId
    );

    return categoryData[0].name;
  };
  const transactionsCategories = [
    {
      id: 'c9d9e447-1b83-4238-8712-edc77b18b739',
      name: 'Main expenses',
      type: 'EXPENSE',
    },
    {
      id: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
      name: 'Products',
      type: 'EXPENSE',
    },
    {
      id: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
      name: 'Car',
      type: 'EXPENSE',
    },
    {
      id: 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4',
      name: 'Self care',
      type: 'EXPENSE',
    },
    {
      id: '76cc875a-3b43-4eae-8fdb-f76633821a34',
      name: 'Child care',
      type: 'EXPENSE',
    },
    {
      id: '128673b5-2f9a-46ae-a428-ec48cf1effa1',
      name: 'Household products',
      type: 'EXPENSE',
    },
    {
      id: '1272fcc4-d59f-462d-ad33-a85a075e5581',
      name: 'Education',
      type: 'EXPENSE',
    },
    {
      id: 'c143130f-7d1e-4011-90a4-54766d4e308e',
      name: 'Leisure',
      type: 'EXPENSE',
    },
    {
      id: '719626f1-9d23-4e99-84f5-289024e437a8',
      name: 'Other expenses',
      type: 'EXPENSE',
    },
    {
      id: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402',
      name: 'Entertainment',
      type: 'EXPENSE',
    },
    {
      id: '063f1132-ba5d-42b4-951d-44011ca46262',
      name: 'Income',
      type: 'INCOME',
    },
  ];
  const categoryName = getCategoryName();

  return (
    <>
      <div className={styles.TableRowMobile}>
        <div className={styles.TableRowMobile__element}>
          <span className={styles.TableRowMobile__key}>Date</span>
          <span className={styles.TableRowMobile__value}>
            {`${data.day}.${data.month}.${data.year}`}
          </span>
        </div>
        <div className={styles.TableRowMobile__element}>
          <span className={styles.TableRowMobile__key}>Type</span>
          <span className={styles.TableRowMobile__value}>
            {transaction.type === 'EXPENSE' ? '-' : '+'}
          </span>
        </div>
        <div className={styles.TableRowMobile__element}>
          <span className={styles.TableRowMobile__key}>Category</span>
          <span className={styles.TableRowMobile__value}>{categoryName}</span>
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
            onClick={() => handleDeleteTransaction(transaction.id)}
          >
            <span className={styles.DeleteButton__Text}>Delete</span>
          </DeleteButton>
          <EditButton
            type="button"
            aria-label="edit"
            onClick={() => openModalEditTransaction}
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
