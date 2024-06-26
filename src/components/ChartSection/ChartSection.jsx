import clsx from 'clsx'
import {Chart as ChartJS, defaults
} from 'chart.js/auto'
import { Line } from 'react-chartjs-2'


defaults.maintainAspectRatio = false,
defaults.responsive = true

export const ChartSection = ({
  otherClasses
}) => {


  const chartSectionClasses = clsx(
    otherClasses, 'relative mt-10'
  )


  
  return (
    <div className={chartSectionClasses} data-testid='chart-section'>
      <div className='lg:ml-[350px] px-4 py-6 rounded-xl  shadow-md'>
      <p className='mb-6 text-gray-800 text-[42px] font-light'>
      Sentiment Analysis  
      </p>
      <div className='w-full h-[350px]'>
 <Line
    data={{
      labels: ["march 24", "", "march 25"],
      datasets: [
        {
          label: "positive",
          data: [0, 5, 29],
          borderColor: 'green',
          borderWidth: 2,
          tension: 0.5,
          backgroundColor: 'transparent',
          pointBorderColor: 'transparent',
        },
       
        {
          label: "neutral",
          data: [0, 3, 18],
          borderColor: 'gray',
          tension: 0.5,
          borderWidth: 2,
          backgroundColor: 'transparent',
          pointBorderColor: 'transparent'
        },
        {
          label: "negative",
          data: [0, 20, 58],
          borderColor: 'red',
          tension: 0.5,
          borderWidth: 2,
          backgroundColor: 'transparent',
          pointBorderColor: 'transparent'
        },
      ]
    }}
    />
      </div>
      </div>
    </div>
  )
}

export default ChartSection
