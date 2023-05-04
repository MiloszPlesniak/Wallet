import { TextField } from '@mui/material';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import style from './TransactionForm.module.scss';
import DropdownCategories from 'components/DropdownCategories/DropdownCategories';
import Buttons from 'components/Buttons/Buttons';
import TransactionSchema from 'validations/TransactionSchema';
import { withFormik } from 'formik';

const TransactionForm = ({
  typeOfTransaction,
  firstButtonHandler,
  secondButtonHandler,
  firstButtonText,
  ...props
}) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      {typeOfTransaction && <DropdownCategories />}
      <div>
        <TextField
          className={style.form__amount}
          name="amount"
          placeholder="0.00"
          value={values.amount}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.amount && Boolean(errors.amount)}
          helperText={touched.amount ? errors.amount : ' '}
        />
        <Datetime
          timeFormat={false}
          closeOnSelect={true}
          inputProps={{
            className: style.form__dateTime,
            name: 'date',
          }}
          initialValue={new Date()}
          value={values.date}
        />
      </div>
      <TextField
        className={style.form__comment}
        name="Comment"
        placeholder="Comment"
        value={values.comment}
      />
      <div className={style.form__btn}>
        <Buttons
          firstButtonText={firstButtonText}
          firstButtonHandler={firstButtonHandler}
          secondButtonText="CANCEL"
          secondButtonHandler={secondButtonHandler}
        />
      </div>
    </form>
  );
};

const FormikTransactionForm = withFormik({
  mapPropsToValues: () => ({
    amount: '',
    date: '',
    comment: '',
  }),
  validationSchema: TransactionSchema,

  handleSubmit: (values, { props }) => {
    props.firstButtonHandler(values);
  },
})(TransactionForm);

export default FormikTransactionForm;
