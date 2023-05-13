import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import style from './EditTransactionForm.module.scss';
import Buttons from 'components/Buttons/Buttons';
import TransactionSchema from 'validations/TransactionSchema';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { editTransactions } from 'redux/transaction/thunk';
import { selectSingleTransaction } from 'redux/transaction/selectors';

import { changeIsModalEditTransactionOpen } from 'redux/global/slice';
import { date } from 'yup';

const EditTransactionForm = ({
  typeOfTransaction,
  secondButtonHandler,
  firstButtonText,
  ...props
}) => {
  const { handleBlur } = props;
  const dispatch = useDispatch();
  const [type, setType] = useState('INCOME');
  const transaction = useSelector(selectSingleTransaction);

  useEffect(() => {
    setType(transaction.type);
    // eslint-disable-next-line no-unused-vars
  }, [transaction]);

  const formik = useFormik({
    initialValues: {
      transactionDate: transaction.transactionDate,
      type: transaction.type,
      categoryId: transaction.categoryId,
      comment: transaction.comment,
      amount: Math.abs(transaction.amount),
    },
    validationSchema: TransactionSchema,
    onSubmit: values => {
      const expense = {
        transactionDate: values.transactionDate,
        type: values.type,
        categoryId: values.categoryId,
        comment: values.comment,
        amount: -Math.abs(values.amount),
      };
      const income = {
        transactionDate: values.transactionDate,
        type: values.type,
        categoryId: values.categoryId,
        comment: values.comment,
        amount: Math.abs(values.amount),
      };
      const data = type === 'INCOME' ? income : expense;
      const payload = {
        data,
        id: transaction.id,
      };
      dispatch(editTransactions(payload));

      formik.resetForm();
      dispatch(changeIsModalEditTransactionOpen());
    },
  });

  return (
    <form className={style.form} onSubmit={formik.handleSubmit}>
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

export default EditTransactionForm;
