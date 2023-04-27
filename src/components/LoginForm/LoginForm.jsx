import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import styles from './LoginForm.module.scss';
const LoginForm = () => {
  return (
    <form className={styles.LoginForm}>
      <Typography align="center" className={styles.LoginForm__title}>
        Wallet
      </Typography>
      <TextField
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
