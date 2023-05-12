import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import style from './ModalEditTransaction.module.scss';
import ModalTemplate from 'components/ModalTemplate/ModalTemplate';
import TransactionForm from 'components/TransactionForm/TransactionForm';
import { selectIsModalEditTransactionOpen } from 'redux/global/selectors';
import { changeIsModalEditTransactionOpen } from 'redux/global/slice';
const ModalEditTransaction = ({ typeOfTransaction }) => {
  const modalIsOpen = useSelector(selectIsModalEditTransactionOpen);
  const dispatch = useDispatch();
  
  return (
    <ModalTemplate
      title={'Edit transaction'}
      open={modalIsOpen}
      onClose={() => dispatch(changeIsModalEditTransactionOpen())}
    >
      <div className={style.switch}>
        <span
          className={clsx({
            [style.switch__active_income]: typeOfTransaction === '+',
          })}
        >
          Income
        </span>
        /
        <span
          className={clsx({
            [style.switch__active_expense]: typeOfTransaction === '-',
          })}
        >
          Expense
        </span>
      </div>
      <TransactionForm
        typeOfTransaction={typeOfTransaction}
        firstButtonText="save"
        firstButtonHandler={() => console.log('d')}
        secondButtonHandler={() => dispatch(changeIsModalEditTransactionOpen())}
      />
    </ModalTemplate>
  );
};
export default ModalEditTransaction;
