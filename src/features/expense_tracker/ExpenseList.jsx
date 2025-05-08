import React from 'react';
import { FiDollarSign, FiCalendar, FiTag, FiEdit2, FiTrash2 } from 'react-icons/fi';

const ExpenseList = ({ expenses, trips, loading, filters, onFilterChange, onEdit, onDelete }) => {
  if (loading) {
    return (
      <div className="bg-surface dark:bg-dark-surface rounded-lg shadow p-6">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary dark:border-dark-primary"></div>
        </div>
      </div>
    );
  }

  if (expenses.length === 0) {
    return (
      <div className="bg-surface dark:bg-dark-surface rounded-lg shadow p-6 text-center">
        <p className="text-text-secondary dark:text-dark-text-secondary">No expenses found</p>
      </div>
    );
  }

  return (
    <div className="bg-surface dark:bg-dark-surface rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">Recent Expenses</h3>
        <div className="flex gap-2 w-full sm:w-auto">
          <select
            value={filters.month}
            onChange={(e) => onFilterChange({ ...filters, month: e.target.value })}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1 text-sm bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {new Date(0, i).toLocaleString('default', { month: 'long' })}
              </option>
            ))}
          </select>
          <select
            value={filters.year}
            onChange={(e) => onFilterChange({ ...filters, year: e.target.value })}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1 text-sm bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
          >
            {Array.from({ length: 5 }, (_, i) => {
              const year = new Date().getFullYear() - 2 + i;
              return <option key={year} value={year}>{year}</option>;
            })}
          </select>
          <select
            value={filters.tripId}
            onChange={(e) => onFilterChange({ ...filters, tripId: e.target.value })}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1 text-sm bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
          >
            <option value="">All Trips</option>
            {trips.map(trip => (
              <option key={trip._id} value={trip._id}>{trip.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {expenses.map((expense) => (
          <div key={expense._id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium text-text-primary dark:text-dark-text-primary">
                  {expense.title}
                </h4>
                <div className="flex items-center text-sm text-text-secondary dark:text-dark-text-secondary mt-1 flex-wrap gap-x-3">
                  <span className="flex items-center">
                    <FiTag className="mr-1" />
                    {expense.category}
                  </span>
                  <span className="flex items-center">
                    <FiCalendar className="mr-1" />
                    {new Date(expense.date).toLocaleDateString()}
                  </span>
                  {expense.trip && (
                    <span className="text-xs text-primary dark:text-dark-primary">
                      Trip: {expense.trip.title}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="font-bold text-text-primary dark:text-dark-text-primary">
                  <FiDollarSign className="inline mr-1" />
                  {expense.amount.toFixed(2)}
                </div>
                <button
                  onClick={() => onEdit(expense._id, expense)}
                  className="text-primary dark:text-dark-primary hover:text-blue-700 dark:hover:text-blue-400 p-1"
                >
                  <FiEdit2 />
                </button>
                <button
                  onClick={() => onDelete(expense._id)}
                  className="text-error dark:text-dark-error hover:text-red-700 dark:hover:text-red-400 p-1"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
            {expense.notes && (
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary mt-2">
                {expense.notes}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;