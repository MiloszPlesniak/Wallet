import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import styles from './Chart.module.scss';

const Chart = ({ filteredData }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { expenseCategories, expenseData } = filteredData;

  const expensesOverall = () => {
    let sum = 0;
    for (const expense of expenseData) {
      sum += expense;
    }
    return sum;
  };

  const data = {
    labels: expenseCategories || ['No trasactions'],
    datasets: [
      {
        data: expenseData || [0],
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
          '#DCDCDF',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      customCanvasBackgroundColor: {
        color: 'transparent',
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
    devicePixelRatio: 2,
    // maintainAspectRatio: false,
    cutout: '70%',
  };

  return (
    <div>
      <div className={styles.Chart__exspenseContainer}>
        <Doughnut className={styles.Chart} data={data} options={options} />
        <p className={styles.Chart__expenseOverall}>
          {expensesOverall() === 0 ? '' : expensesOverall() + ' zł'}
        </p>
      </div>
    </div>
  );
};

export default Chart;
