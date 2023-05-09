import React from 'react';
import Media from 'react-media';
import Logo from 'components/Logo/Logo';
import styles from './Header.module.scss';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import LogoutIcon from '@mui/icons-material/Logout';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalLogoutOpen } from 'redux/global/selectors';
import { changeIsModalLogoutOpen } from 'redux/global/slice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Media
        queries={{
          mobile: '(max-width: 767px)',
          tablet: '(min-width: 768px) and (max-width: 1279px)',
          desktop: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <div className={styles.Header__container}>
            <div className={styles.Header}>
              <Logo />

              {matches.mobile && (
                <div className={styles.Header__logOut}>
                  <ListItemButton
                    className={styles.Header__logOutButton}
                    onClick={() => dispatch(changeIsModalLogoutOpen())}
                    sx={{ p: 0, m: 0 }}
                  >
                    <span className={styles.Header__logOutUserName}>Name</span>
                    <LogoutIcon
                      sx={{
                        color: '#bdbdbd',
                      }}
                    />
                  </ListItemButton>
                </div>
              )}
              {(matches.desktop || matches.tablet) && (
                <div className={styles.Header__logOut}>
                  <span className={styles.Header__logOutUserName}>Name</span>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ color: '#bdbdbd' }}
                  />

                  <ListItemButton
                    sx={{ p: 0, pl: '12px' }}
                    className={styles.Header__logOutButton}
                    onClick={() => dispatch(changeIsModalLogoutOpen())}
                  >
                    <LogoutIcon
                      sx={{
                        color: '#bdbdbd',
                      }}
                    />
                    <span className={styles.Header__logOutButtonText}>
                      Exit
                    </span>
                  </ListItemButton>
                </div>
              )}
            </div>
          </div>
        )}
      </Media>

      <ModalLogout
        isModalOpen={useSelector(selectIsModalLogoutOpen)}
        handleModalClose={() => dispatch(changeIsModalLogoutOpen())}
      />
    </>
  );
};

export default Header;
