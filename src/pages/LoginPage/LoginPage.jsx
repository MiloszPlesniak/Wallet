import Media from 'react-media';
import { Helmet } from 'react-helmet';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import styles from './LoginPage.module.scss';
import loginImg from 'images/desktop/login-page-image.png';
import ellipse2 from 'images/Ellipse2.png';
import Footer from 'components/Footer/Footer.jsx';
import 'index.css';
const LoginPage = () => {
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const { email, password, firstName } = e.target.elements;
  //   dispatch(login({ email: email.value, password: password.value, firstName: firstName.value }));
  // };

  return (
    <>
      <Helmet title="Login">
        <meta name="description" content="Login" />
      </Helmet>
      <div className="container_for_reg_and_log_page">
        <div className={styles.LoginPage}>
          <Media
            query="(min-width:768px)and (max-width:1279px)"
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
            query="(min-width:1280px)"
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
