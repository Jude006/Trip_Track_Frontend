// src/features/trips/BudgetProgress.jsx
import React from 'react';
import { FiDollarSign } from 'react-icons/fi';

const BudgetProgress = ({ totalBudget, totalSpent }) => {
  const progress = Math.min((totalSpent / totalBudget) * 100 || 0, 100);
  const remaining = totalBudget - totalSpent;

  return (
    <div className="bg-white dark:bg-dark-surface rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
        Budget Progress
      </h2>
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-primary/10 dark:bg-dark-primary/20 text-primary dark:text-dark-primary">
          <FiDollarSign className="text-xl" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Spent</span>
            <span className="font-medium">
              ${totalSpent.toLocaleString()} / ${totalBudget.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className="bg-primary dark:bg-dark-primary h-3 rounded-full" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
            <span>{progress.toFixed(1)}% spent</span>
            <span>${remaining.toLocaleString()} remaining</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetProgress;