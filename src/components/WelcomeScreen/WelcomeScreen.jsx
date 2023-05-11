import { useEffect, useState } from 'react';
import sprite from '../../assets/svg/sprite.svg';
import styles from './WelcomeScreen.module.scss';
import logoImg from '../../assets/svg/logo-img.svg';

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
            <img
              src={logoImg}
              alt="logo"
              className={styles.WelcomeScreen__logo}
            />
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
