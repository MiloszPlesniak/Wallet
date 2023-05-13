import Media from 'react-media';
import { breakpoints } from 'styles/breakpoints.js';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearTransaction } from 'redux/transaction/slice.js';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import styles from './RegistrationPage.module.scss';
import registrationImg from 'assets/images/desktop/registration-page-image.png';
import ellipse2 from 'assets/images/desktop/Ellipse2.png';
import Footer from 'components/Footer/Footer.jsx';
import 'index.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearTransaction());
  });
  return (
    <>
      <Helmet title="Registration">
        <meta
          name="description"
          content="Registration page of Wallet finance App"
        />
      </Helmet>
      <div className="container_for_reg_and_log_page">
        <div className={styles.RegistrationPage}>
          <Media
            query={breakpoints.tablet}
            render={() => (
              <>
                <div className={styles.RegistrationPage__leftSide}>
                  <img
                    className={styles.RegistrationPage__img}
                    src={registrationImg}
                    alt="cellphone and a girl"
                    width="452px"
                    height="413px"
                  />
                  <h1 className={styles.RegistrationPage__title}>
                    Finance App
                  </h1>
                </div>
              </>
            )}
          />

          <Media
            query={breakpoints.desktop}
            render={() => (
              <>
                <div className={styles.RegistrationPage__pinkEllipse}>
                  <img
                    className={styles.RegistrationPage__pinkEllipseImg}
                    src={ellipse2}
                    alt="pink ellipse"
                  />
                </div>
                <div className={styles.RegistrationPage__leftSide}>
                  <img
                    className={styles.RegistrationPage__img}
                    src={registrationImg}
                    alt="cellphone and a girl"
                    width="452px"
                    height="413px"
                  />

                  <h1 className={styles.RegistrationPage__title}>
                    Finance App
                  </h1>
                </div>
              </>
            )}
          />

          <div className={styles.RegistrationPage__rightSide}>
            <RegistrationForm
              className={styles.RegistrationPage__registrationForm}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationPage;
