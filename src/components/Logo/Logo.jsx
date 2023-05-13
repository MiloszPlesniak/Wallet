import React from 'react';
import styles from './Logo.module.scss';
import sprite from '../../assets/svg/sprite.svg';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to="/home" className={styles.LogoContainer}>
      <svg className={styles.LogoContainer__img}>
        <use href={`${sprite}#icon-logo`}></use>
      </svg>
    </NavLink>
  );
};

export default Logo;
