import Media from 'react-media';
import { Helmet } from 'react-helmet';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import styles from './RegistrationPage.module.scss';
import registrationImg from 'images/desktop/registration-page-image.png';
const RegistrationPage = () => {
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const { email, password, firstName } = e.target.elements;
  //   dispatch(registration({ email: email.value, password: password.value, firstName: firstName.value }));
  // };

  return (
    <div className={styles.RegistrationPage}>
      <Helmet title="Registration">
        <meta name="description" content="Registration" />
      </Helmet>

      <Media
        query="(min-width:768px)"
        render={() => (
          <div className={styles.RegistrationPage__leftSide}>
            <img
              className={styles.RegistrationPage__img}
              src={registrationImg}
              alt="cellphone and a girl"
              width="452px"
              height="413px"
            />

            <h1 className={styles.RegistrationPage__title}>Finance App</h1>
          </div>
        )}
      />

      <div className={styles.RegistrationPage__rightSide}>
        <RegistrationForm
          className={styles.RegistrationPage__registrationForm}
        />
      </div>
    </div>
  );
};

export default RegistrationPage;
