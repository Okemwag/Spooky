import React from 'react';

const EmissionTable: React.FC = () => {
  const data = [
    { date: '2024-01-01', tonnes: 100, company: 'Company A', gasType: 'CO2' },
    { date: '2024-02-01', tonnes: 150, company: 'Company B', gasType: 'CH4' },
    { date: '2024-03-01', tonnes: 120, company: 'Company A', gasType: 'N2O' },
    { date: '2024-04-01', tonnes: 130, company: 'Company C', gasType: 'CO2' },
    { date: '2024-05-01', tonnes: 140, company: 'Company B', gasType: 'CH4' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Emission Details</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tonnes
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type of Gas
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.tonnes}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.company}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.gasType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmissionTable;
