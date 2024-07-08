import React from 'react';
import config from '@/config/general';

export default function ComparisonTable() {
  const {companies, factors, comparison} = config.contents;
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="w-3/5 text-center mt-12">
        <h1 className="text-4xl font-bold text-black">{comparison.title1}</h1>
        <h1 className="text-4xl font-bold mb-4 text-black">{comparison.title2}</h1>
      </div>
      <div className="w-full max-w-screen-lg mx-auto my-10">
        <table className="w-full table-auto border-collapse border-green-700">
          <thead>
            <tr>
              <th className="text-left p-4 w-1/4 border-b-2 border-green-700"></th>
              {companies.map((company, index) => (
                <th key={index} className="text-left p-4 w-1/4 border-b-2 border-green-700 text-green-800">{company.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {factors.map((factor, rowIndex) => (
              <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"} rounded`}>
                <td className="p-4 font-bold w-1/4 border-green-700">{factor.label}</td>
                {companies.map((company, colIndex) => (
                  <td key={colIndex} className="p-4 w-1/4 border-green-700">
                    <div className="flex items-center">
                      {company[factor.key].check ? (
                        <span className="mr-2 flex items-center justify-center w-4 h-4 rounded-full bg-green-700 text-white text-xs">
                          ✓
                        </span>
                      ) : (
                        <span className="mr-2 flex items-center justify-center w-4 h-4 rounded-full border-2 border-green-700 text-green-700 text-xs">
                          ✗
                        </span>
                      )}
                      {company[factor.key].value}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
