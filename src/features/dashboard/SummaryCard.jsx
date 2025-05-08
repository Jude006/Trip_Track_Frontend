import React from 'react';

const SummaryCard = ({ icon, title, value, change }) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-surface dark:bg-dark-surface p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mt-1">
            {value}
          </p>
        </div>
        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
          {icon}
        </div>
      </div>
      <div className={`mt-3 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? '↑' : '↓'} {Math.abs(change)}% from last month
      </div>
    </div>
  );
};

export default SummaryCard;