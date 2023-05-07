import Media from 'react-media';
import { Helmet } from 'react-helmet';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import styles from './LoginPage.module.scss';
import loginImg from 'images/desktop/login-page-image.png';
const LoginPage = () => {
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const { email, password, firstName } = e.target.elements;
  //   dispatch(login({ email: email.value, password: password.value, firstName: firstName.value }));
  // };

  return (
    <div className={styles.LoginPage}>
      <Helmet title="Login">
        <meta name="description" content="Login" />
      </Helmet>

      <Media
        query="(min-width:768px)"
        render={() => (
          <div className={styles.LoginPage__leftSide}>
            <div className={styles.LoginPage__pictureBox}>
              <img
                className={styles.LoginPage__img}
                src={loginImg}
                alt="cellphone and a girl"
                width="435px"
                height="420px"
              />
            </div>
            <h1 className={styles.LoginPage__title}>Finance App</h1>
          </div>
        )}
      />

      <div className={styles.LoginPage__rightSide}>
        <LoginForm className={styles.LoginPage__loginForm} />
      </div>
    </div>
  );
};

export default LoginPage;
