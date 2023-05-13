import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './ModalAddTransaction.module.scss';
import ModalTemplate from 'components/ModalTemplate/ModalTemplate';
import SwitchIncomeExpense from 'components/SwitchIncomeExpense/SwitchIncomeExpense';
import TransactionForm from 'components/TransactionForm/TransactionForm';

import { fetchTransactionsCategories } from 'redux/transaction/thunk';
import { selectIsModalAddTransactionOpen } from 'redux/global/selectors';
import { changeIsModalAddTransactionOpen } from 'redux/global/slice';

const ModalAddTransaction = props => {
  const [typeOfTransaction, setTypeOfTransaction] = useState(true);
  const modalIsOpen = useSelector(selectIsModalAddTransactionOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsCategories());
  }, [dispatch]);

  return (
    <ModalTemplate
      title={'Add transaction'}
      open={modalIsOpen}
      onClose={() => dispatch(changeIsModalAddTransactionOpen())}
    >
      <div className={style.switchBtn}>
        <SwitchIncomeExpense
          handleToogle={() => {
            setTypeOfTransaction(!typeOfTransaction);
          }}
          checked={typeOfTransaction}
        />
      </div>
      <TransactionForm
        typeOfTransaction={typeOfTransaction}
        firstButtonText="add"
        secondButtonHandler={() => dispatch(changeIsModalAddTransactionOpen())}
      />
    </ModalTemplate>
  );
};
export default ModalAddTransaction;
