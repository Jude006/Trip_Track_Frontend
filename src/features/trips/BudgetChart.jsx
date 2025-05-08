import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const BudgetChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white  dark:bg-dark-surface p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4 text-text-primary dark:text-dark-text-primary">
          Budget Overview
        </h3>
        <p className="text-gray-500 dark:text-gray-400">No budget data available</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-dark-surface p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-text-primary dark:text-dark-text-primary">
        Budget Overview
      </h3>
      
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BudgetChart;