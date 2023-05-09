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

const TransactionForm = ({
  typeOfTransaction,
  firstButtonHandler,
  secondButtonHandler,
  firstButtonText,
  ...props
}) => {
  const { handleBlur } = props;

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const formik = useFormik({
    initialValues: { amount: '', date: '', comment: '' },
    validationSchema: TransactionSchema,
    onSubmit: () => {
      dispatch(
        addTransactions({
          amount: formik.amount,
          date: formik.date,
          comment: formik.comment,
          type: typeOfTransaction ? '+' : '-',
          owner: user.id,
        })
      );
    },
  });

  return (
    <form className={style.form} onSubmit={formik.handleSubmit}>
      {typeOfTransaction && <DropdownCategories />}
      <div>
        <TextField
          className={style.form__amount}
          name="amount"
          placeholder="0.00"
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
        />
      </div>
      <TextField
        className={style.form__comment}
        name="Comment"
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
          secondButtonText="CANCEL"
          secondButtonHandler={secondButtonHandler}
        />
      </div>
    </form>
  );
};

export default TransactionForm;
