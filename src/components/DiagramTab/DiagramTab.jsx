//import { useSelector } from 'react-redux';

import style from './DiagramTab.module.scss';

const DiagramTab = ({ diagramData }) => {
  let sum = 0;
   diagramData.forEach(item => {
    sum = sum + item.amount;
    return sum;
  });
  console.log(sum);
  return (
    <div className={style.DiagramTab}>
      <ul className={style.DiagramTab__titleBackground}>
        <li className={style.DiagramTab__title}>Category</li>
        <li className={style.DiagramTab__title}>Sum</li>
      </ul>
      <ul className={style.DiagramTab__body}>
        {diagramData.map((item, index) => (
          <li key={index} className={style.DiagramTab__item}>
            <div className={style.DiagramTab__itemCategory}>
              <div
                className={style.DiagramTab__categoryColor}
                style={{
                  backgroundColor: `${item.color}`,
                }}
              />
              <span className={style.DiagramTab__text}>{item.name}</span>
            </div>
            <span className={style.DiagramTab__number}>{item.amount}</span>
          </li>
        ))}
      </ul>
      <ul>
        <li className={style.DiagramTab__itemStat}>
          <div className={style.DiagramTab__title}>Expenses:</div>
          <div className={style.DiagramTab__numberRed}>{sum}</div>
        </li>
        <li className={style.DiagramTab__itemStat}>
          <div className={style.DiagramTab__title}>Income: </div>
          <div className={style.DiagramTab__numberGreen}>{400}</div>
        </li>
      </ul>
    </div>
  );
};

export default DiagramTab;
