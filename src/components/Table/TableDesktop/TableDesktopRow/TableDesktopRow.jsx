import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransactions } from 'redux/transaction/thunk';
import { changeIsModalEditTransactionOpen } from 'redux/global/slice';
import { setSelectedTransaction } from 'redux/transaction/slice';
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

  const openModalEditTransaction = type => {
    dispatch(setSelectedTransaction(transaction));
    dispatch(changeIsModalEditTransactionOpen(type));
  };

  const handleDeleteTransaction = id => {
    dispatch(deleteTransactions(id));
  };

  const dynamicCss =
    transaction.type === 'EXPENSE' ? styles.expense : styles.income;

  const getCategoryName = () => {
    const categoryData = transactionsCategories.filter(
      item => item.id === transaction.categoryId
    );

    return categoryData[0].name;
  };

  const categoryName = getCategoryName();

  return (
    <>
      <tr>
        <td data-type="date">{`${data.day}.${data.month}.${data.year}`}</td>
        <td data-type="type">{transaction.type === 'EXPENSE' ? '-' : '+'}</td>
        <td>{categoryName}</td>
        <td data-type="comment">{transaction.comment}</td>
        <td data-type="sum" className={dynamicCss}>
          {Math.abs(transaction.amount)}
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
              onClick={() => handleDeleteTransaction(transaction.id)}
            >
              Delete
            </DeleteButton>
          </div>
        </td>
      </tr>
    </>
  );
}
