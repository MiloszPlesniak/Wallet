import { TextField } from '@mui/material';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import style from './TransactionForm.module.scss';
import DropdownCategories from 'components/DropdownCategories/DropdownCategories';
import Buttons from 'components/Buttons/Buttons';
const TransactionForm = ({
  typeOfTransaction,
  firstButtonHandler,
  secondButtonHandler,
  firstButtonText,
}) => {
  return (
    <form className={style.form}>
      {typeOfTransaction && <DropdownCategories />}
      <div>
        <TextField
          className={style.form__amount}
          name="amount"
          placeholder="0.00"
        />
        <Datetime
          timeFormat={false}
          closeOnSelect={true}
          inputProps={{
            className: style.form__dateTime,
            name: 'data',
          }}
          initialValue={new Date()}
        />
      </div>
      <TextField
        className={style.form__comment}
        name="Comment"
        placeholder="Comment"
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

export default TransactionForm;
