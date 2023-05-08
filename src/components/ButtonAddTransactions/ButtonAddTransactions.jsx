import { useDispatch } from "react-redux";

import { changeIsModalAddTransactionOpen } from "redux/global/slice";

import ModalAddTransaction from "components/ModalAddTransaction/ModalAddTransaction";

import style from "./ButtonAddTransactions.module.scss"


const ButtonAddTransactions = () => {
    const dispatch = useDispatch();

    const openModalAddTransaction = () => {
        dispatch(changeIsModalAddTransactionOpen());
    };
  
    return (
        <div>
        <button
            type="button"
            onClick={openModalAddTransaction}
            className={style.ButtonAddTransactions}
        >
            <p className={style.ButtonAddTransactions__plus}>+</p>
        </button>
        {<ModalAddTransaction />}
        </div>
    );
  }

export default ButtonAddTransactions;