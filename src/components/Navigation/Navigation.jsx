import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import style from './Navigation.module.scss';

const Navigation = ({ handleShowCurrency, handleCloseCurrency }) => {
  return (
    <div className={style.Navigation}>
      <NavLink
        className={style.Navigation__link}
        onClick={handleCloseCurrency}
        to="/home"
        style={({ isActive }) => ({
          fontWeight: isActive ? '700' : '400',
          textShadow: isActive ? '0 0 8px #6e78e8be' : 'none',
        })}
      >
        <div className={style.Navigation__icon}>
          <HomeRoundedIcon fontSize="inherit" />
        </div>
        <div className={style.Navigation__text}>Home</div>
      </NavLink>
      <NavLink
        className={style.Navigation__link}
        onClick={handleCloseCurrency}
        to="/statistics"
        style={({ isActive }) => ({
          fontWeight: isActive ? '700' : '400',
          textShadow: isActive ? '0 0 8px #6e78e8be' : 'none',
        })}
      >
        <div className={style.Navigation__icon}>
          <ShowChartRoundedIcon fontSize="inherit" />
        </div>
        <div className={style.Navigation__text}>Statistics</div>
      </NavLink>
      <div className={style.Navigation__linkMobile}>
        <div
          className={style.Navigation__iconMobile}
          onClick={handleShowCurrency}
        >
          <AttachMoneyRoundedIcon fontSize="inherit" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
