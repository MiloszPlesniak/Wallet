import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';
import { loginUser } from 'redux/auth/thunk';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Logo from 'components/Logo/Logo';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Buttons from 'components/Buttons/Buttons';
import LoginSchema from 'validations/LoginSchema';
import { withFormik } from 'formik';
import styles from './LoginForm.module.scss';

const LoginForm = props => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const navigate = useNavigate();
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  const handleLogin = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(loginUser({ email: email.value, password: password.value }));
  };

  return (
    <form className={styles.LoginForm} onSubmit={handleSubmit}>
      {error.message && <Alert severity="error">{error.message}</Alert>}

      <Logo style={{ marginBottom: '20px' }} />

      <div style={{ marginTop: '40px' }}>
        <TextField
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email ? errors.email : ' '}
          error={touched.email && Boolean(errors.email)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password ? errors.password : ' '}
          error={touched.password && Boolean(errors.password)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Buttons
        firstButtonText="Log in"
        firstButtonHandler={() => {
          handleSubmit();
          handleLogin();
        }}
        secondButtonText="Register"
        secondButtonHandler={() => navigate('/registration')}
      />
    </form>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: LoginSchema,
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },
})(LoginForm);

export default FormikLoginForm;
