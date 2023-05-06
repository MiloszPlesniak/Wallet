import React from 'react';
import Media from 'react-media';
import Logo from 'components/Logo/Logo';
import styles from './Header.module.scss';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
        tablet: '(min-width: 768px) and (max-width: 1279px)',
        desktop: '(min-width: 1280px)',
      }}
    >
      {matches => (
        <div className={styles.Header}>
          <Logo />
          <div className={styles.Header__logOut}>
            <span className={styles.Header__logOutUserName}>Name</span>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ color: '#bdbdbd' }}
            />
            <ListItemButton className={styles.Header__logOutButton}>
              <LogoutIcon
                sx={{
                  color: '#bdbdbd',
                }}
              />
              <span className={styles.Header__logOutButtonText}>Exit</span>
            </ListItemButton>
          </div>
        </div>
      )}
    </Media>
  );
};

export default Header;
