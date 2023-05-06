import React from 'react';
import styles from './Logo.module.scss';
import logo from '../../assets/images/icons/logo.svg';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to="/home" className={styles.LogoContainer}>
      <img className={styles.LogoContainer__img} src={logo} alt="Logo" />
    </NavLink>
  );
};

export default Logo;
