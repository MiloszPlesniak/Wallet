// import { useDispatch, useSelector } from 'react-redux';
// import { registration } from 'redux/auth/operations';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Logo from 'components/Logo/Logo';
import styles from './RegistrationForm.module.scss';

const RegistrationForm = () => {
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const { email, password, firstName } = e.target.elements;
  //   dispatch(registration({ email: email.value, password: password.value, firstName: firstName.value }));
  // };

  return (
    <form
      className={styles.RegistrationForm}
      // onSubmit={handleSubmit}
    >
      <Logo className={styles.RegistrationForm__logo} />

      <TextField
        name="email"
        className={styles.RegistrationForm__input}
        variant="standard"
        type="email"
        autoComplete="email"
        fullWidth
        margin="normal"
        placeholder="Email"
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
        className={styles.RegistrationForm__input}
        type="password"
        autoComplete="current-password"
        variant="standard"
        fullWidth
        margin="normal"
        placeholder="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon className={styles.RegistrationForm__icon} />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        name="password"
        className={styles.RegistrationForm__input}
        type="password"
        autoComplete="current-password"
        variant="standard"
        fullWidth
        margin="normal"
        placeholder="Confirm password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon className={styles.RegistrationForm__icon} />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        name="firstName"
        className={styles.RegistrationForm__input}
        variant="standard"
        fullWidth
        margin="normal"
        sx={{ marginBottom: '40px' }}
        placeholder="First name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBoxIcon className={styles.RegistrationForm__icon} />
            </InputAdornment>
          ),
        }}
      />

      <Button variant="contained" className={styles.RegistrationForm__button}>
        Register
      </Button>
      <Button variant="outlined" className={styles.RegistrationForm__button}>
        Log in
      </Button>
    </form>
  );
};

export default RegistrationForm;
