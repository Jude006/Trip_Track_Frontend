// src/features/trips/ExpenseBreakdown.jsx
import React from 'react';
import BudgetChart from './BudgetChart';

const ExpenseBreakdown = () => {
  // This is placeholder data - you'll want to fetch actual expense data from your backend
  const data = [
    { name: 'Transport', value: 400 },
    { name: 'Food', value: 300 },
    { name: 'Lodging', value: 300 },
    { name: 'Activities', value: 200 },
  ];

  return (
    <div className="bg-white dark:bg-dark-surface rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
        Expense Breakdown
      </h2>
      <BudgetChart data={data} />
    </div>
  );
};

export default ExpenseBreakdown;