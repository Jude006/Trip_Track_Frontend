import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FiDollarSign, FiPieChart } from 'react-icons/fi';

const ExpenseAnalytics = ({ data }) => {
  if (!data) {
    return (
      <div className="bg-surface dark:bg-dark-surface rounded-lg shadow p-6">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary dark:border-dark-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface dark:bg-dark-surface rounded-lg shadow p-6 space-y-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <FiPieChart className="text-xl text-primary dark:text-dark-primary" />
        <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">Expense Analytics</h3>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-text-primary dark:text-dark-text-primary">Monthly Spending</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.monthlySpending}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-gray-200)" />
              <XAxis 
                dataKey="_id" 
                stroke="var(--color-text-primary)"
                tickFormatter={(value) => {
                  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                  return `${monthNames[value.month - 1]} ${value.year}`;
                }}
              />
              <YAxis stroke="var(--color-text-primary)" />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Total']}
                labelFormatter={(value) => {
                  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                  return `${monthNames[value.month - 1]} ${value.year}`;
                }}
                contentStyle={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-gray-200)',
                  borderRadius: '0.5rem',
                  color: 'var(--color-text-primary)'
                }}
              />
              <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-text-primary dark:text-dark-text-primary">Category Breakdown</h4>
        <div className="space-y-3">
          {data.categoryBreakdown.map((category, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between">
                <span className="text-text-primary dark:text-dark-text-primary">{category._id}</span>
                <span className="font-medium text-text-primary dark:text-dark-text-primary">
                  <FiDollarSign className="inline mr-1" />
                  {category.total.toFixed(2)}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-primary dark:bg-dark-primary"
                  style={{ 
                    width: `${(category.total / data.categoryBreakdown[0].total) * 100}%`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseAnalytics;