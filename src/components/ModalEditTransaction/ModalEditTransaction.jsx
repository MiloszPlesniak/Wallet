import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import style from './ModalEditTransaction.module.scss';
import ModalTemplate from 'components/ModalTemplate/ModalTemplate';
import EditTransactionForm from 'components/EditTransactionForm/EditTransactionForm';
import { selectIsModalEditTransactionOpen } from 'redux/global/selectors';
import { changeIsModalEditTransactionOpen } from 'redux/global/slice';
const ModalEditTransaction = ({ transaction, typeOfTransaction }) => {
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
            [style.switch__active_income]: typeOfTransaction === 'INCOME',
          })}
        >
          Income
        </span>
        /
        <span
          className={clsx({
            [style.switch__active_expense]: typeOfTransaction === 'EXPENSE',
          })}
        >
          Expense
        </span>
      </div>
      <EditTransactionForm
        transaction={transaction}
        typeOfTransaction={typeOfTransaction}
        firstButtonText="save"
        firstButtonHandler={() => console.log('d')}
        secondButtonHandler={() => dispatch(changeIsModalEditTransactionOpen())}
      />
    </ModalTemplate>
  );
};
export default ModalEditTransaction;
