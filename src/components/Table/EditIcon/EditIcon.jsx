import React from 'react';
import styles from './EditIcon.module.scss';
import editIcon from '../../../assets/images/icons/edit.svg';

export default function EditIcon() {
  return (
    <div className={styles.iconContainer}>
      <img
        className={styles.iconContainer__img}
        src={editIcon}
        alt="edit icon"
      />
    </div>
  );
}
