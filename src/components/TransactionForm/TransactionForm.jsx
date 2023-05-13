import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import style from './TransactionForm.module.scss';
import DropdownCategories from 'components/DropdownCategories/DropdownCategories';
import Buttons from 'components/Buttons/Buttons';
import TransactionSchema from 'validations/TransactionSchema';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { addTransactions } from 'redux/transaction/thunk';
import { refreshUser } from 'redux/auth/operations';
import { changeIsModalAddTransactionOpen } from 'redux/global/slice';
import { date } from 'yup';

const CategoriesId = [
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

const TransactionForm = ({
  typeOfTransaction,
  secondButtonHandler,
  firstButtonText,
  ...props
}) => {
  const { handleBlur } = props;
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('INCOME');
  // const transactions = useSelector(selectTransactions);

  const formik = useFormik({
    initialValues: {
      amount: 0,
      transactionDate: new Date(),
      comment: '',
      categoryId: '',
      type: '',
    },
    validationSchema: TransactionSchema,
    onSubmit: values => {
      const expense = {
        amount: -Math.abs(values.amount),
        transactionDate: values.transactionDate,
        comment: values.comment,
        categoryId: values.categoryId,
        type: values.type,
      };
      const income = {
        amount: Math.abs(values.amount),
        transactionDate: values.transactionDate,
        comment: values.comment,
        categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
        type: values.type,
      };
      formik.setFieldValue('date', values.transactionDate.valueOf());
      // dispatch(addTransactions(values));

      if (type === 'INCOME') {
        dispatch(addTransactions(income));
      } else {
        dispatch(addTransactions(expense));
      }

      formik.resetForm();
      dispatch(changeIsModalAddTransactionOpen());
      dispatch(refreshUser);
    },
  });

  useEffect(() => {
    formik.setFieldValue(
      'categoryId',
      CategoriesId.find(item => item.name === category)?.id
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    typeOfTransaction
      ? formik.setFieldValue('type', 'INCOME')
      : formik.setFieldValue('type', 'EXPENSE');

    typeOfTransaction ? setType('INCOME') : setType('EXPENSE');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeOfTransaction]);

  return (
    <form className={style.form} onSubmit={formik.handleSubmit}>
      {!typeOfTransaction && (
        <DropdownCategories handleSetCategory={setCategory} />
      )}

      <div>
        <TextField
          className={style.form__amount}
          name="amount"
          type="number"
          placeholder="0"
          inputProps={{ style: { textAlign: 'center', fontWeight: 700 } }}
          value={formik.values.amount}
          onChange={formik.handleChange}
          onBlur={handleBlur}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount ? formik.errors.amount : ' '}
          FormHelperTextProps={{
            style: {
              top: '100%',
            },
          }}
        />

        <Datetime
          controls={date}
          dateFormat="YYYY-MM-DD"
          timeFormat={false}
          closeOnSelect={true}
          inputProps={{
            className: style.form__dateTime,
            name: 'transactionDate',
          }}
          initialValue={new Date()}
          value={formik.values.transactionDate}
          onChange={value => {
            formik.setFieldValue('transactionDate', value);
          }}
          onBlur={handleBlur}
          error={
            formik.touched.transactionDate &&
            Boolean(formik.errors.transactionDate)
          }
          helperText={
            formik.touched.transactionDate ? formik.errors.transactionDate : ''
          }
        />
        {formik.touched.transactionDate &&
          Boolean(formik.errors.transactionDate) && (
            <p className={style.form__dateTime__error}>
              {formik.errors.transactionDate}
            </p>
          )}
      </div>
      <TextField
        className={style.form__comment}
        name="Comment"
        value={formik.values.comment}
        onChange={value => {
          formik.setFieldValue('comment', value.target.value);
        }}
        onBlur={handleBlur}
        error={formik.touched.comment && Boolean(formik.errors.comment)}
        helperText={formik.touched.comment ? formik.errors.comment : ' '}
        placeholder="Comment"
        inputProps={{
          style: {
            padding: 10,
          },
        }}
      />
      <div className={style.form__btn}>
        <Buttons
          firstButtonType="submit"
          firstButtonText={firstButtonText}
          secondButtonText="cancel"
          secondButtonHandler={secondButtonHandler}
        />
      </div>
    </form>
  );
};

export default TransactionForm;
