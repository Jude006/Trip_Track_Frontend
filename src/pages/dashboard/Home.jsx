import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FiCalendar, FiDollarSign, FiPieChart, FiPlus } from 'react-icons/fi';
import SummaryCard from '../../features/dashboard/SummaryCard';
import RecentTrips from '../../features/dashboard/RecentTrips';
import BudgetOverview from '../../features/dashboard/BudgetOverview';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalTrips: 0,
    activeTrips: 0,
    totalBudget: 0,
    totalSpent: 0
  });
  const [recentTrips, setRecentTrips] = useState([]) ;
  const [budgetData, setBudgetData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/dashboard`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        
        setStats({
          totalTrips: data.totalTrips,
          activeTrips: data.activeTrips,
          totalBudget: data.totalBudget,
          totalSpent: data.totalSpent
        });
        
        setRecentTrips(data.recentTrips);
        setBudgetData(data.budgetData);
      } catch (error) {
        toast.error('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-primary font-heading">
          Welcome Back!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Here's what's happening with your trips
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <SummaryCard 
          icon={<FiCalendar className="text-blue-500" size={24} />}
          title="Total Trips"
          value={stats.totalTrips}
          change={5} 
        />
        <SummaryCard 
          icon={<FiCalendar className="text-green-500" size={24} />}
          title="Active Trips"
          value={stats.activeTrips}
          change={2}
        />
        <SummaryCard 
          icon={<FiDollarSign className="text-purple-500" size={24} />}
          title="Total Budget"
          value={`$${stats.totalBudget.toLocaleString()}`}
          change={8}
        />
        <SummaryCard 
          icon={<FiDollarSign className="text-orange-500" size={24} />}
          title="Total Spent"
          value={`$${stats.totalSpent.toLocaleString()}`}
          change={-3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface dark:bg-dark-surface p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary">
                Recent Trips
              </h2>
              <button 
                onClick={() => navigate('/dashboard/my-trips')}
                className="text-sm text-primary dark:text-dark-primary hover:underline"
              >
                View All
              </button>
            </div>
            <RecentTrips trips={recentTrips} />
          </div>

          <div className="bg-surface dark:bg-dark-surface p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => navigate('/dashboard/my-trips')}
                className="flex items-center justify-center bg-primary dark:bg-dark-primary text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition"
              >
                <FiPlus className="mr-2" />
                Create New Trip
              </button>
              <button
                onClick={() => navigate('/dashboard/budget-planner')}
                className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-text-primary dark:text-dark-text-primary px-4 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                <FiDollarSign className="mr-2" />
                Manage Budgets
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Budget Overview */}
        <div className="lg:col-span-1 ">
          <div className="bg-surface dark:bg-dark-surface p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 sticky top-4">
            <div className="flex items-center mb-4">
              <FiPieChart className="text-text-primary dark:text-dark-text-primary mr-2" size={20} />
              <h2 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary">
                Budget Overview
              </h2>
            </div>
            <BudgetOverview data={budgetData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;