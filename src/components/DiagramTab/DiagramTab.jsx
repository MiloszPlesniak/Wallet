//import { useSelector } from 'react-redux';

import style from './DiagramTab.module.scss';

const DiagramTab = ({ diagramData }) => {
  const { expenseData, expenseOverall, incomeOverall } = diagramData;
  //const data = useSelector();

  console.log(diagramData);

  return (
    <div className={style.DiagramTab}>
      <ul className={style.DiagramTab__titleBackground}>
        <li className={style.DiagramTab__title}>Category</li>
        <li className={style.DiagramTab__title}>Sum</li>
      </ul>
      <ul className={style.DiagramTab__body}>
        {expenseData.map((item, index) => (
          <li key={index} className={style.DiagramTab__item}>
            <div className={style.DiagramTab__itemCategory}>
              <div className={style.DiagramTab__categoryColor} />
              <span className={style.DiagramTab__text}>{item.category}</span>
            </div>
            <span className={style.DiagramTab__number}>{item.sum}</span>
          </li>
        ))}
      </ul>
      <ul>
        <li className={style.DiagramTab__itemStat}>
          <div className={style.DiagramTab__title}>Expenses:</div>
          <div className={style.DiagramTab__numberRed}>{expenseOverall}</div>
        </li>
        <li className={style.DiagramTab__itemStat}>
          <div className={style.DiagramTab__title}>Income: </div>
          <div className={style.DiagramTab__numberGreen}>{incomeOverall}</div>
        </li>
      </ul>
    </div>
  );
};

export default DiagramTab;
