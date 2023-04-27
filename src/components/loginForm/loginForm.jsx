// import { useDispatch, useSelector } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';

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
      <Typography align="center" className={styles.LoginForm__title}>
        Wallet
      </Typography>

      <TextField
        name="email"
        className={styles.LoginForm__input}
        variant="standard"
        type="email"
        fullWidth
        margin="normal"
        placeholder="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon className={styles.LoginForm__icon} />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        name="password"
        className={styles.LoginForm__input}
        type="password"
        autoComplete="current-password"
        variant="standard"
        fullWidth
        margin="normal"
        placeholder="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon className={styles.LoginForm__icon} />
            </InputAdornment>
          ),
        }}
      />

      <Box className={styles.LoginForm__buttons}>
        <Button variant="contained" className={styles.LoginForm__button}>
          Log in
        </Button>
        <Button variant="outlined" className={styles.LoginForm__button}>
          Register
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
