//import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/auth/thunk';
import { selectError } from 'redux/auth/selectors';
import Alert from '@mui/material/Alert';
import PasswordStrengthBar from 'react-password-strength-bar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Logo from 'components/Logo/Logo';
import Buttons from 'components/Buttons/Buttons';
import styles from './RegistrationForm.module.scss';
import RegistrationSchema from 'validations/RegistrationSchema';
//import { withFormik } from 'formik';
import { useFormik } from 'formik';

const RegistrationForm = props => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const navigate = useNavigate();
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  /*const handleRegistration = event => {
    //console.log(event);
    event.preventDefault();*/
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
    },
    validationSchema: RegistrationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      /*dispatch(
        registerUser({
          email: formik.values.email,
          password: formik.values.password,
          firstName: formik.values.value,
        })
      );*/
    },
  });

  /*const { email, password, firstName } = event.target.elements;
    dispatch(
      registerUser({
        email: email.value,
        password: password.value,
        firstName: firstName.value,
      })
    );
  };*/

  return (
    <form
      className={styles.RegistrationForm}
      onSubmit={/*handleSubmit*/ formik.handleSubmit}
    >
      <Logo />

      {error.message && <Alert severity="error">{error.message}</Alert>}

      <div style={{ marginTop: '30px' }}>
        <TextField
          name="email"
          type="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={handleBlur}
          helperText={formik.touched.email ? formik.errors.email : ' '}
          error={formik.touched.email && Boolean(formik.errors.email)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon className={styles.RegistrationForm__icon} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.password ? formik.errors.password : ' '}
          error={formik.touched.password && Boolean(formik.errors.password)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon className={styles.RegistrationForm__icon} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={handleBlur}
          helperText={
            formik.confirmPassword ? formik.errors.confirmPassword : ''
          }
          error={
            formik.confirmPassword && Boolean(formik.errors.confirmPassword)
          }
          sx={{ marginBottom: '2px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon className={styles.RegistrationForm__icon} />
              </InputAdornment>
            ),
          }}
        />
        <PasswordStrengthBar
          password={formik.values.confirmPassword}
          minLength={6}
          shortScoreWord={false}
          barColors={['#E5F1EF', '#24CCA7', '#24CCA7', '#24CCA7', '#24CCA7']}
          className={styles.RegistrationForm__passwordStrengthBar}
          scoreWords={false}
        />
        <TextField
          name="firstName"
          placeholder="First name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={handleBlur}
          helperText={formik.touched.firstName ? formik.errors.firstName : ' '}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon className={styles.RegistrationForm__icon} />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <Buttons
        firstButtonType="submit"
        firstButtonText="Register"
        secondButtonText="Log in"
        /*firstButtonHandler={() => {
          handleSubmit();
        }}*/
        secondButtonHandler={() => navigate('/login')}
      />
    </form>
  );
};

/*const FormikRegistrationForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    firstName: '',
  }),
  validationSchema: RegistrationSchema,
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(RegistrationForm);*/

export default RegistrationForm;
