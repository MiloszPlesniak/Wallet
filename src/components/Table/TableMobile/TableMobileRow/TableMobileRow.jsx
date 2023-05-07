import React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '../../EditIcon/EditIcon';
import { styled } from '@mui/material/styles';
import styles from './TableMobileRow.module.scss';

const EditButton = styled(Button)(({ theme }) => ({
  height: 26,
  marginBottom: 0,
  padding: '0px',
  gap: 8,
  fontFamily: 'Circe',
  fontSize: 14,
  textTransform: 'capitalize',
  borderRadius: 4,
  backgroundColor: 'transparent',
  color: '#000',
}));

const DeleteButton = styled(Button)(({ theme }) => ({
  marginBottom: 0,
  fontFamily: 'Circe',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '1em',
  textTransform: 'capitalize',
  width: '67px',
  height: '26px',
  padding: '4px 12px',
}));

export default function TableMobileRow({ data }) {
  const dynamicValueCss = data.type === '-' ? styles.expense : styles.income;
  const dynamicStripeCss =
    data.type === '-'
      ? styles.TableRowMobile__stripeExpense
      : styles.TableRowMobile__stripeIncome;
  return (
    <div className={styles.TableRowMobile}>
      <div className={styles.TableRowMobile__element}>
        <span className={styles.TableRowMobile__key}>Date</span>
        <span className={styles.TableRowMobile__value}>{data.date}</span>
      </div>
      <div className={styles.TableRowMobile__element}>
        <span className={styles.TableRowMobile__key}>Type</span>
        <span className={styles.TableRowMobile__value}> {data.type}</span>
      </div>
      <div className={styles.TableRowMobile__element}>
        <span className={styles.TableRowMobile__key}>Category</span>
        <span className={styles.TableRowMobile__value}>{data.category}</span>
      </div>
      <div className={styles.TableRowMobile__element}>
        <span className={styles.TableRowMobile__key}> Comment</span>
        <span className={styles.TableRowMobile__value}>{data.comment}</span>
      </div>
      <div className={styles.TableRowMobile__element}>
        <span className={styles.TableRowMobile__key}>Sum</span>
        <span className={(styles.TableRowMobile__value, dynamicValueCss)}>
          {data.sum}
        </span>
      </div>
      <div className={styles.TableRowMobile__element}>
        <DeleteButton disableElevation variant="contained">
          <span className={styles.DeleteButton__Text}>Delete</span>
        </DeleteButton>
        <EditButton>
          <EditIcon />
          <span className={styles.EditButton__Text}>Edit</span>
        </EditButton>
      </div>
      <div className={dynamicStripeCss} />
    </div>
  );
}
