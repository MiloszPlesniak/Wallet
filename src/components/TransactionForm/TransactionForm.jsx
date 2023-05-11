import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import style from './TransactionForm.module.scss';
import DropdownCategories from 'components/DropdownCategories/DropdownCategories';
import Buttons from 'components/Buttons/Buttons';
import TransactionSchema from 'validations/TransactionSchema';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addTransactions } from 'redux/transaction/thunk';
import { selectUser } from 'redux/auth/selectors';
import { changeIsModalAddTransactionOpen } from 'redux/global/slice';

const TransactionForm = ({
  typeOfTransaction,
  secondButtonHandler,
  firstButtonText,
  ...props
}) => {
  const { handleBlur } = props;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [category, setCategory] = useState('');

  const formik = useFormik({
    initialValues: {
      amount: 0,
      date: '',
      comment: '',
      category: '',
      owner: user.id,
      type: '',
    },
    validationSchema: TransactionSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      dispatch(addTransactions(values));
      formik.resetForm();
      dispatch(changeIsModalAddTransactionOpen());
    },
  });

  useEffect(() => {
    formik.setFieldValue('category', category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    typeOfTransaction
      ? formik.setFieldValue('type', '+')
      : formik.setFieldValue('type', '-');
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
          timeFormat={false}
          closeOnSelect={true}
          inputProps={{
            className: style.form__dateTime,
            name: 'date',
          }}
          initialValue={new Date()}
          value={formik.values.date}
          onChange={value => {
            formik.setFieldValue('date', value._d);
          }}
          onBlur={handleBlur}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date ? formik.errors.date : ' '}
        />
        {formik.touched.date && Boolean(formik.errors.date) && (
          <p className={style.form__dateTime__error}>{formik.errors.date}</p>
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
