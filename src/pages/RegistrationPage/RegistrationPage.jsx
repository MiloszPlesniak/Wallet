import Media from 'react-media';
import { Helmet } from 'react-helmet';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import styles from './RegistrationPage.module.scss';
import registrationImg from 'images/desktop/registration-page-image.png';
import ellipse2 from 'images/Ellipse2.png';
import Footer from 'components/Footer/Footer.jsx';
import 'index.css';
const RegistrationPage = () => {
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const { email, password, firstName } = e.target.elements;
  //   dispatch(registration({ email: email.value, password: password.value, firstName: firstName.value }));
  // };

  return (
    <>
      <Helmet title="Registration">
        <meta name="description" content="Registration" />
      </Helmet>
      <div className="container_for_reg_and_log_page">
        <div className={styles.RegistrationPage}>
          <Media
            query="(min-width:768px) and (max-width:1279px)"
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
            query="(min-width:1280px)"
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
