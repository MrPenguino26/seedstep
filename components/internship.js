import { useState } from 'react';

const internshipsData = [
  { companyName: 'TechCorp', position: 'Software Engineer Intern', description: 'Work on cutting-edge software solutions.', category: 'Engineering' },
  { companyName: 'BizGroup', position: 'Marketing Intern', description: 'Assist with digital marketing campaigns.', category: 'Marketing' },
  { companyName: 'HealthPlus', position: 'Biomedical Engineer Intern', description: 'Innovate healthcare technologies.', category: 'Healthcare' },
  // Add more internships as needed
];

export default function Internships() {
  const [filter, setFilter] = useState('All');

  const filteredInternships = internshipsData.filter((internship) =>
    filter === 'All' ? true : internship.category === filter
  );

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Find Your Internship</h1>

        <div className="flex justify-center mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300"
          >
            <option value="All">All Categories</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Healthcare">Healthcare</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Company Name
                </th>
                <th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredInternships.map((internship, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {internship.companyName}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {internship.position}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {internship.description}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {internship.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
