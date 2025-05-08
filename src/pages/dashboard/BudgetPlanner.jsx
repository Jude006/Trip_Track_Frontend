import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import BudgetForm from '../../features/budget_planner/BudgetForm';
import BudgetSummary from '../../features/budget_planner/BudgetSummary';
import BudgetList from '../../features/budget_planner/BudgetList';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const BudgetPlanner = () => {
  const [budgets, setBudgets] = useState([]);
  const [trips, setTrips] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const fetchBudgets = async () => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/budgets`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBudgets(data);
    } catch (error) {
      toast.error('Failed to load budgets');
    }
  };

  const fetchTrips = async () => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/trips`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTrips(data);
    } catch (error) {
      toast.error('Failed to load trips');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchBudgets(), fetchTrips()]);
      setLoading(false);
    };
    
    fetchData();
  }, []);

  const handleCreateBudget = async (budgetData) => {
    try {
      const token = localStorage.getItem("token");
      console.log("Creating budget with data:", budgetData);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/budgets`,
        budgetData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setBudgets([data, ...budgets]);
      setShowForm(false);
      toast.success('Budget created successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create budget');
    }
  };

  const handleUpdateBudget = async (id, updatedData) => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/budgets/${id}`,
        updatedData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setBudgets(budgets.map(b => b._id === id ? data : b));
      setSelectedBudget(data);
      toast.success('Budget updated successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update budget');
    }
  };

  const handleDeleteBudget = async (id) => {
    if (window.confirm('Are you sure you want to delete this budget?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/api/budgets/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        
        setBudgets(budgets.filter(b => b._id !== id));
        if (selectedBudget?._id === id) {
          setSelectedBudget(null);
        }
        toast.success('Budget deleted successfully!');
      } catch (error) {
        toast.error(error.response?.data?.message || 'Failed to delete budget');
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
        <h1 className="text-2xl font-bold dark:text-dark-text-primary font-heading">Budget Planner</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-primary dark:bg-dark-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
        >
          Create New Budget
        </button>
      </div>

      {showForm && (
        <BudgetForm 
          trips={trips}
          onSubmit={handleCreateBudget}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <BudgetList 
            budgets={budgets}
            onSelect={setSelectedBudget}
            onEdit={handleUpdateBudget}
            onDelete={handleDeleteBudget}
            activeBudget={selectedBudget?._id}
          />
        </div>
        <div className="lg:col-span-2">
          {selectedBudget ? (
            <BudgetSummary 
              budget={selectedBudget} 
              onEdit={handleUpdateBudget}
            />
          ) : (
            <div className="bg-surface dark:bg-dark-surface p-6 rounded-lg shadow text-center">
              <p className="text-text-secondary dark:text-dark-text-secondary">
                {budgets.length === 0 
                  ? "You haven't created any budgets yet. Get started by creating your first budget!"
                  : "Select a budget to view details"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetPlanner;