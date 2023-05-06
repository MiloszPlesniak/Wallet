// import { useDispatch, useSelector } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Logo from 'components/Logo/Logo';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Buttons from 'components/Buttons/Buttons';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const { email, password } = e.target.elements;
  //   dispatch(logIn({ email: email.value, password: password.value }));
  // };

  return (
    <form
      className={styles.LoginForm}
      // onSubmit={handleSubmit}
    >
      <Logo />

      <TextField
        name="email"
        type="email"
        placeholder="Email"
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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />

      <Buttons
        firstButtonText="Log in"
        firstButtonPath="login"
        firstButtonHandler={() => console.log('Log in')}
        secondButtonText="Register"
        secondButtonPath="registration"
        secondButtonHandler={() => console.log('Register')}
      />
    </form>
  );
};

export default LoginForm;
