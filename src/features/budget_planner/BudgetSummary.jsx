import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { FiDollarSign, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const BudgetSummary = ({ budget, onEdit }) => {
  const chartData = budget.categories.map(category => ({
    name: category.name,
    value: category.allocated,
    spent: category.spent || 0
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  const totalSpent = chartData.reduce((sum, item) => sum + item.spent, 0);
  const remaining = budget.totalAmount - totalSpent;

  return (
    <div className="bg-surface dark:bg-dark-surface rounded-lg shadow p-6 space-y-6 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
            {budget.name}
          </h3>
          {budget.trip && (
            <p className="text-sm text-primary dark:text-dark-primary">
              Trip: {budget.trip.title}
            </p>
          )}
        </div>
        <div className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
          {budget.totalAmount.toLocaleString()} {budget.currency}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-900/20">
          <div className="text-sm text-text-secondary dark:text-dark-text-secondary">Total Budget</div>
          <div className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
            {budget.totalAmount.toLocaleString()}
          </div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-100 dark:border-green-900/20">
          <div className="text-sm text-text-secondary dark:text-dark-text-secondary">Total Spent</div>
          <div className="text-xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            {totalSpent.toLocaleString()}
          </div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg border border-purple-100 dark:border-purple-900/20">
          <div className="text-sm text-text-secondary dark:text-dark-text-secondary">Remaining</div>
          <div className="text-xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            {remaining >= 0 ? (
              <FiTrendingUp className="text-green-500 dark:text-green-400 mr-1" />
            ) : (
              <FiTrendingDown className="text-red-500 dark:text-red-400 mr-1" />
            )}
            {Math.abs(remaining).toLocaleString()}
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name, props) => [
                `${value} ${budget.currency}`,
                props.payload.name
              ]}
              contentStyle={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-gray-200)',
                borderRadius: '0.5rem',
                color: 'var(--color-text-primary)'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-text-primary dark:text-dark-text-primary">
            Category Breakdown
          </h4>
          <button
            onClick={() => onEdit(budget._id, budget)}
            className="text-sm text-primary dark:text-dark-primary hover:underline"
          >
            Edit Budget
          </button>
        </div>
        <div className="space-y-3">
          {chartData.map((category, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between">
                <span className="text-text-primary dark:text-dark-text-primary">
                  {category.name}
                </span>
                <span className="font-medium text-text-primary dark:text-dark-text-primary">
                  {category.spent.toLocaleString()} / {category.value.toLocaleString()} {budget.currency}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="h-2 rounded-full"
                  style={{ 
                    width: `${Math.min(100, (category.spent / category.value) * 100)}%`,
                    backgroundColor: COLORS[index % COLORS.length]
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

export default BudgetSummary;