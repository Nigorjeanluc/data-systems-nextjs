import Head from 'next/head'
import { DropdownButton ,Dropdown, Stack } from 'react-bootstrap'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LogarithmicScale,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale
);
import { Line } from 'react-chartjs-2';

import styles from '../styles/Home.module.css'

export const getStaticProps = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        fill: true,
        lineTension: 0.2,
        tension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [140, 70, 80, 70, 80, 120, 160, 120, 170, 160, 180, 230]
      }
    ]
  };

  const options = {
    scales: {
      x: {
        grid : {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        },
      },
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
      yAxes: [{
        type: 'logarithmic',
        ticks: {
          min: 40,
          max: 240
        }
      }]
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  const years = [
    {
      id: 1,
      year: 2022
    },
    {
      id: 2,
      year: 2021
    },
    {
      id: 3,
      year: 2020
    },
    {
      id: 4,
      year: 2019
    },
    {
      id: 5,
      year: 2018
    },
    {
      id: 6,
      year: 2017
    },
  ]

  return {
    props: {
      data,
      options,
      years
    }
  }
}

export default function Home({ data, options, years }) {
  return (
  <>
    <Head>
      <title>Mentee Registration Trends</title>
    </Head>
    <div className={styles.wrapper}>
      <Stack direction="horizontal" gap={2}>
        <div><h4>Mentee Registration Trends</h4></div>
        <div className="ms-auto">
          <DropdownButton variant="default" align="end" size="sm" title="Filter by current year" id="dropdown-menu-align-end">
            {years && years.map(year => (
              <Dropdown.Item key={year.id} eventKey={year.id}>{year.year}</Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </Stack>
      <Line
        data={data}
        width={400}
        height={100}
        options={options}
      />
    </div>
  </>
  )
}
