//import { useSelector } from 'react-redux';

import style from './DiagramTab.module.scss'

const DiagramTab = () => {
    //const data = useSelector();
  
    return (
        <div>
        <ul className={style.DiagramTab__titleBackground}>
          <li className={style.DiagramTab__title}>Category</li>
          <li className={style.DiagramTab__title}>Sum</li>
        </ul>
        <ul>
    


                <li className={style.DiagramTab__item}>
                <div className={style.DiagramTab__itemCategory}>
                  <div className={style.DiagramTab__color}
                    style={{
                        //backgroundColor: `${item.color}`
                    }}
                  ></div>
                  <div className={style.DiagramTab__text}></div>
                </div>
                  <div className={style.DiagramTab__number}></div>
                </li>
    
        </ul>
        <ul>
          <li className={style.DiagramTab__itemStat}>
            <div className={style.DiagramTab__title}>Expenses:</div>
            <div className={style.DiagramTab__numberRed}></div>
          </li>
          <li className={style.DiagramTab__itemStat}>
            <div className={style.DiagramTab__title}>Income:</div>
            <div className={style.DiagramTab__numberGreen}></div>
          </li>
        </ul>
      </div>
        
    );
  }

  export default DiagramTab;