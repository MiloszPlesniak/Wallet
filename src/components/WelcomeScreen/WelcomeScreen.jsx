import { useEffect, useState } from 'react';
import sprite from '../../assets/svg/sprite.svg';
import styles from './WelcomeScreen.module.scss';

const WelcomeScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    sessionStorage.setItem('welcomeScreenShown', true);
    setTimeout(() => {
      setShow(false);
    }, 2500);
  }, []);

  return (
    <>
      {show && (
        <div className={styles.WelcomeScreen__backdrop}>
          <div className={styles.WelcomeScreen__overlay}>
            <svg className={styles.WelcomeScreen__logo}>
              <use href={`${sprite}#icon-logo`}></use>
            </svg>
            <p className={styles.WelcomeScreen__title} data-text="Wallet">
              Wallet
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeScreen;
