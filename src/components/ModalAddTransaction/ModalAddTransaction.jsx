import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './ModalAddTransaction.module.scss';
import ModalTemplate from 'components/ModalTemplate/ModalTemplate';
import SwitchIncomeExpense from 'components/SwitchIncomeExpense/SwitchIncomeExpense';
import TransactionForm from 'components/TransactionForm/TransactionForm';
import { selectIsModalAddTransactionOpen } from 'redux/global/selectors';
import { changeIsModalAddTransactionOpen } from 'redux/global/slice';

const ModalAddTransaction = props => {
  const [typeOfTransaction, setTypeOfTransaction] = useState(false);
  const modalIsOpen = useSelector(selectIsModalAddTransactionOpen);
  const dispath = useDispatch();

  return (
    <ModalTemplate
      title={'Add transaction'}
      open={modalIsOpen}
      onClose={() => dispath(changeIsModalAddTransactionOpen())}
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
        // firstButtonHandler={() => console.log('d')}
        secondButtonHandler={() => dispath(changeIsModalAddTransactionOpen())}
      />
    </ModalTemplate>
  );
};
export default ModalAddTransaction;
