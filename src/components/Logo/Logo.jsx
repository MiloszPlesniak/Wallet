import React from 'react';
import styles from './Logo.module.scss';
import sprite from '../../assets/svg/sprite.svg';

const Logo = () => {
  return (
    <div className={styles.LogoContainer}>
      <svg className={styles.LogoContainer__img}>
        <use href={`${sprite}#icon-logo`}></use>
      </svg>
    </div>
  );
};

export default Logo;
