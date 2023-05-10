import Media from 'react-media';
import { breakpoints } from 'styles/breakpoints';
import { Helmet } from 'react-helmet';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import styles from './LoginPage.module.scss';
import loginImg from 'images/desktop/login-page-image.png';
import ellipse2 from 'images/Ellipse2.png';
import Footer from 'components/Footer/Footer.jsx';
import 'index.css';

const LoginPage = () => {
  return (
    <>
      <Helmet title="Login">
        <meta name="description" content="Login page of Wallet finance App" />
      </Helmet>
      <div className="container_for_reg_and_log_page">
        <div className={styles.LoginPage}>
          <Media
            query={breakpoints.tablet}
            render={() => (
              <div className={styles.LoginPage__leftSide}>
                <div className={styles.LoginPage__pictureBox}>
                  <img
                    className={styles.LoginPage__img}
                    src={loginImg}
                    alt="cellphone and a boy"
                    width="435px"
                    height="420px"
                  />
                </div>
                <h1 className={styles.LoginPage__title}>Finance App</h1>
              </div>
            )}
          />
          <Media
            query={breakpoints.desktop}
            render={() => (
              <>
                <div className={styles.LoginPage__pinkEllipse}>
                  <img
                    className={styles.LoginPage__pinkEllipseImg}
                    src={ellipse2}
                    alt="pink ellipse"
                  />
                </div>

                <div className={styles.LoginPage__leftSide}>
                  <img
                    className={styles.LoginPage__img}
                    src={loginImg}
                    alt="cellphone and a girl"
                    width="452px"
                    height="413px"
                  />

                  <h1 className={styles.LoginPage__title}>Finance App</h1>
                </div>
              </>
            )}
          />

          <div className={styles.LoginPage__rightSide}>
            <LoginForm className={styles.LoginPage__loginForm} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
