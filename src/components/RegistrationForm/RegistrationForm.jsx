import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registration } from 'redux/auth/operations';
import PasswordStrengthBar from 'react-password-strength-bar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Logo from 'components/Logo/Logo';
import Buttons from 'components/Buttons/Buttons';
import styles from './RegistrationForm.module.scss';

const RegistrationForm = () => {
  const [password, setPassword] = useState('');

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
      <Logo />

      <TextField
        name="email"
        type="email"
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
        type="password"
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
        type="password"
        placeholder="Confirm password"
        onChange={e => setPassword(e.target.value)}
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
        password={password}
        minLength={6}
        shortScoreWord={false}
        barColors={['#E5F1EF', '#24CCA7', '#24CCA7', '#24CCA7', '#24CCA7']}
        className={styles.RegistrationForm__passwordStrengthBar}
        scoreWords={false}
      />
      <TextField
        name="firstName"
        placeholder="First name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBoxIcon className={styles.RegistrationForm__icon} />
            </InputAdornment>
          ),
        }}
      />

      <Buttons
        firstButtonText="Register"
        firstButtonHandler={() => console.log('Register')}
        secondButtonText="Log in"
        secondButtonHandler={() => console.log('Log in')}
      />
    </form>
  );
};

export default RegistrationForm;
