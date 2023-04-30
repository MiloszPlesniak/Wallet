import styles from './DashboardPage.module.scss';
import { Box, Grid2 } from '@mui/material';

const DashboardPage = () => {
  return (
    <Box className={styles.Dashboard}>
      <Box className={styles.Dashboard__backgroundElipse1} />
      <Box className={styles.Dashboard__backgroundElipse2} />
      <Box className={styles.Dashboard__container}></Box>
    </Box>
  );
};

export default DashboardPage;
