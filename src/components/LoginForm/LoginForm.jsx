// import { useDispatch, useSelector } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Logo from 'components/Logo/Logo';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
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

      <Box className={styles.LoginForm__buttons}>
        <Button variant="contained" className={styles.LoginForm__button}>
          Log in
        </Button>
        <Button
          variant="outlined"
          className={styles.LoginForm__button}
          color="secondary"
          sx={{
            color: 'secondary.main',
            backgroundColor: 'transparent',
          }}
        >
          Register
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
