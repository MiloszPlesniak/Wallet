import Logo from 'components/Logo/Logo';
import styles from './Header.module.scss';
import { Box } from '@mui/system';
import exitIcon from '../../assets/images/icons/exit.svg';
const Header = () => {
  return (
    <Box className={styles.Header}>
      <Logo />
      <Box className={styles.Header__auth}>
        <Box component="span">Name</Box>
        <Box className={styles.Header__exit} component="span">
          <img src={exitIcon} alt="" srcset="" />
          Exit
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
