import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import style from './Chart.module.scss'

const Chart = ({ categories, expenses }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: categories || ['No trasactions'],
    datasets: [
      {
        data: [1],
        backgroundColor:['#DCDCDF','#FED057', '#FFD8D0', '#FD9498', '#C5BAFF','#6E78E8','#4A56E2','#81E1FF','#24CCA7','#00AD84'],
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
    cutout: '70%',
  };

  return (
    <div>
        <Doughnut data={data} options={options}/>
        <p className={style.Chart__exspense}> {expenses}</p>
    </div>
  );
};

export default Chart;
