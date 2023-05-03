import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import { useState } from 'react';
import { TextField } from '@mui/material';
import style from './ModalAddTransaction.module.scss';
import Buttons from 'components/Buttons/Buttons';
import ModalTemplate from 'components/ModalTemplate/ModalTemplate';
import SwitchIncomeExpense from 'components/SwitchIncomeExpense/SwitchIncomeExpense';
import DropdownCategories from 'components/DropdownCategories/DropdownCategories';
const ModalAddTransaction = () => {
  const [typeOfTransaction, setTypeOfTransaction] = useState(false);

  return (
    <ModalTemplate title={'Add transaction'} open={true}>
      <div className={style.switchBtn}>
        <SwitchIncomeExpense
          handleToogle={() => {
            setTypeOfTransaction(!typeOfTransaction);
          }}
        />
      </div>
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
            firstButtonText="ADD"
            firstButtonHandler={() => console.log('Log in')}
            secondButtonText="CANCEL"
            secondButtonHandler={() => console.log('Register')}
          />
        </div>
      </form>
    </ModalTemplate>
  );
};
export default ModalAddTransaction;
