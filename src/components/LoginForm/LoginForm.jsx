import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';
import { loginUser } from 'redux/auth/operations';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Logo from 'components/Logo/Logo';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Buttons from 'components/Buttons/Buttons';
import LoginSchema from 'validations/LoginSchema';
import styles from './LoginForm.module.scss';
import { useFormik } from 'formik';

const LoginForm = props => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const navigate = useNavigate();
  const { handleBlur } = props;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2)); chyba nie potrzebne
      dispatch(
        loginUser({
          email: formik.values.email,
          password: formik.values.password,
        })
      );
    },
  });

  return (
    <form className={styles.LoginForm} onSubmit={formik.handleSubmit}>
      {error.message && <Alert severity="error">{error.message}</Alert>}

      <Logo style={{ marginBottom: '20px' }} />

      <div style={{ marginTop: '40px' }}>
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
                <EmailIcon />
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
          onBlur={handleBlur}
          helperText={formik.touched.password ? formik.errors.password : ' '}
          error={formik.touched.password && Boolean(formik.errors.password)}
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
        firstButtonType="submit"
        firstButtonText="Log in"
        secondButtonText="Register"
        secondButtonHandler={() => navigate('/registration')}
      />
    </form>
  );
};

export default LoginForm;
