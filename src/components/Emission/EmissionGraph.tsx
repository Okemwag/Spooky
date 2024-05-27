import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import EmissionTable from './EmissionTable';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EmissionGraph: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Carbon Emissions (tons)',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Carbon Emission Trends',
      },
    },
  };

  return (
    <div className='overflow-auto h-screen'>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
    <div>
        <EmissionTable />
    </div>
    </div>
    
    
  );
};

export default EmissionGraph;
