import React from 'react';
import { FiDollarSign, FiCalendar, FiEdit2, FiTrash2 } from 'react-icons/fi';

const BudgetList = ({ budgets, onSelect, onEdit, onDelete, activeBudget, loading }) => {
  if (loading) {
    return (
      <div className="bg-surface dark:bg-dark-surface rounded-lg shadow p-6">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary dark:border-dark-primary"></div>
        </div>
      </div>
    );
  }

  if (budgets.length === 0) {
    return (
      <div className="bg-surface dark:bg-dark-surface rounded-lg shadow p-6 text-center">
        <p className="text-text-secondary dark:text-dark-text-secondary">No budgets found</p>
      </div>
    );
  }

  return (
    <div className="bg-surface dark:bg-dark-surface rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">Your Budgets</h3>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {budgets.map((budget) => (
          <div
            key={budget._id}
            className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition ${
              activeBudget === budget._id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
            }`}
          >
            <div 
              className="flex justify-between items-start"
              onClick={() => onSelect(budget)}
            >
              <div>
                <h4 className="font-medium text-text-primary dark:text-dark-text-primary">
                  {budget.name}
                </h4>
                <div className="flex items-center text-sm text-text-secondary dark:text-dark-text-secondary mt-1">
                  <FiDollarSign className="mr-1" />
                  <span>{budget.totalAmount.toLocaleString()} {budget.currency}</span>
                </div>
                {budget.trip && (
                  <div className="text-xs mt-1 text-primary dark:text-dark-primary">
                    Trip: {budget.trip.title}
                  </div>
                )}
              </div>
              <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                {budget.startDate && (
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    <span>{new Date(budget.startDate).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(budget._id, budget);
                }}
                className="p-1 text-primary dark:text-dark-primary hover:text-blue-700 dark:hover:text-blue-400"
              >
                <FiEdit2 />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(budget._id);
                }}
                className="p-1 text-error dark:text-dark-error hover:text-red-700 dark:hover:text-red-400"
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetList;