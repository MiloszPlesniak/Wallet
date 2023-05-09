import React from 'react';
import styles from './EditIcon.module.scss';
import sprite from 'assets/svg/sprite.svg'

export default function EditIcon() {
  return (
    <div className={styles.iconContainer}>
      <svg className={styles.iconContainer__img}>
        <use href={`${sprite}#icon-edit`}></use>
      </svg>
    </div>
  );
}
