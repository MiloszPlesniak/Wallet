import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import clsx from 'clsx';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import styles from './SwitchIncomeExpense.module.scss';

const ExpenseSwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 40,
  padding: 4,
  overflow: 'visible',

  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(34px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#f4f4f4',

    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      borderRadius: '50%',
    },
  },
  '& .MuiSwitch-track': {
    width: 70,
    height: 30,
    marginTop: 4,
    borderRadius: 34 / 2,
    backgroundColor: 'transparent',
    border: '1px solid #E0E0E0',
    opacity: 1,

    '&.Mui-checked': {
      opacity: 1,
    },
  },
}));

const SwitchIncomeExpense = ({ handleToogle }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.toogleIncomeExpense}>
      <p
        className={clsx(
          styles.toogleIncomeExpense__text,
          !checked && styles.toogleIncomeExpense__text__income
        )}
      >
        Income
      </p>
      <ExpenseSwitch
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          handleToogle();
        }}
        color="default"
        name="expenseSwitch"
        inputProps={{ 'aria-label': 'expense switch' }}
        icon={
          <AddCircleIcon
            style={{
              width: '44px',
              height: '44px',
              color: '#24CCA7',
              filter:
                'drop-shadow(0px 0px 6px #ffffff) drop-shadow(0px 4px 4px rgba(36, 204, 167, .8))',
            }}
          />
        }
        checkedIcon={
          <RemoveCircleIcon
            style={{
              width: '44px',
              height: '44px',
              color: '#FF6596',
              filter:
                'drop-shadow(0px 0px 6px #ffffff) drop-shadow(0px 4px 4px rgba(255, 101, 150, .8))   ',
            }}
          />
        }
      />
      <p
        className={clsx(
          styles.toogleIncomeExpense__text,
          checked && styles.toogleIncomeExpense__text__expense
        )}
      >
        Expense
      </p>
    </div>
  );
};

export default SwitchIncomeExpense;
