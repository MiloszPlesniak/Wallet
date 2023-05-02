import { NavLink } from "react-router-dom";

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

import style from "./Navigation.module.scss";

const Navigation = () => {
    return (
      <div className={style.Navigation}>
        <NavLink className={style.Navigation__link} to="/home">
            <div className={style.Navigation__icon}>
            <HomeRoundedIcon/>
            </div>
            <div className={style.Navigation__text}>
                Home
            </div>
        </NavLink>
        <NavLink className={style.Navigation__link} to="/diagram">
            <div className={style.Navigation__icon}>
            <ShowChartRoundedIcon />
            </div>
            <div className={style.Navigation__text}>
                Statistics
            </div>
        </NavLink>
        <NavLink className={style.Navigation__link} to="/currency">
          <div className={style.Navigation__iconMobile}>
            <AttachMoneyRoundedIcon />
          </div>
      </NavLink>
      </div>
    );
}; 

export default Navigation;