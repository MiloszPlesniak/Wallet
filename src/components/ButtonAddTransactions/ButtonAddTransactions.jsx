import { useDispatch } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';

import { changeIsModalAddTransactionOpen } from 'redux/global/slice';

import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

import style from './ButtonAddTransactions.module.scss';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  const openModalAddTransaction = () => {
    dispatch(changeIsModalAddTransactionOpen());
  };

  return (
    <div>
      <Tooltip title="Add transaction" placement="top" arrow>
        <button
          type="button"
          onClick={openModalAddTransaction}
          className={style.ButtonAddTransactions}
        >
          <p className={style.ButtonAddTransactions__plus}>+</p>
        </button>
      </Tooltip>
      {<ModalAddTransaction />}
    </div>
  );
};

export default ButtonAddTransactions;
