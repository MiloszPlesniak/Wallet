import { useEffect, useState } from 'react';
import logo from '../../assets/images/icons/logoIcon.svg';
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
            <img className={styles.WelcomeScreen__logo} src={logo} alt="Logo" />
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
