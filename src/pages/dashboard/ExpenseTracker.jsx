import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import ExpenseForm from '../../features/expense_tracker/ExpenseForm';
import ExpenseList from '../../features/expense_tracker/ExpenseList';
import ExpenseAnalytics from '../../features/expense_tracker/ExpenseAnalytics';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [analytics, setAnalytics] = useState(null);
  const [filters, setFilters] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    tripId: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const [expensesRes, analyticsRes, tripsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/expenses`, {
            params: filters,
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/expenses/summary`, {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/trips`, {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);
        
        setExpenses(expensesRes.data);
        setAnalytics(analyticsRes.data);
        setTrips(tripsRes.data);
      } catch (error) {
        toast.error('Failed to load expense data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [filters]);

  const handleCreateExpense = async (expenseData) => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/expenses`,
        expenseData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setExpenses([data, ...expenses]);
      setShowForm(false);
      toast.success('Expense added successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to add expense');
    }
  };

  const handleUpdateExpense = async (id, updatedData) => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/expenses/${id}`,
        updatedData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setExpenses(expenses.map(e => e._id === id ? data : e));
      toast.success('Expense updated successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update expense');
    }
  };

  const handleDeleteExpense = async (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/api/expenses/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        
        setExpenses(expenses.filter(e => e._id !== id));
        toast.success('Expense deleted successfully!');
      } catch (error) {
        toast.error(error.response?.data?.message || 'Failed to delete expense');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto dark:bg-dark-background min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold dark:text-dark-text-primary font-heading">Expense Tracker</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-primary dark:bg-dark-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
        >
          Add New Expense
        </button>
      </div>

      {showForm && (
        <ExpenseForm 
          trips={trips}
          onSubmit={handleCreateExpense}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ExpenseList 
            expenses={expenses}
            trips={trips}
            loading={loading}
            filters={filters}
            onFilterChange={setFilters}
            onEdit={handleUpdateExpense}
            onDelete={handleDeleteExpense}
          />
        </div>
        <div className="lg:col-span-1">
          <ExpenseAnalytics data={analytics} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;