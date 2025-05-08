import React, { useState, useEffect } from 'react';
import { FiPlus, FiRefreshCw } from 'react-icons/fi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TripsGrid from '../../features/trips/TripsGrid';
import BudgetChart from '../../features/trips/BudgetChart';
import CreateTripModal from '../../features/trips/CreateTripModal';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { toast } from 'react-hot-toast';

const MyTrips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingTrip, setEditingTrip] = useState(null);
  const [chartData, setChartData] = useState([]);

  const navigate = useNavigate();

  const fetchTrips = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/trips`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTrips(data || []);
      prepareChartData(data || []);
    } catch (error) {
      console.error('Error fetching trips:', error);
      toast.error('Failed to load trips');
      setTrips([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const prepareChartData = (tripsData) => {
    const data = [
      { name: 'Transport', value: 0 },
      { name: 'Food', value: 0 },
      { name: 'Lodging', value: 0 },
      { name: 'Activities', value: 0 }
    ];

    tripsData.forEach(trip => {
      data[0].value += trip.totalBudget * 0.3;
      data[1].value += trip.totalBudget * 0.25;
      data[2].value += trip.totalBudget * 0.35;
      data[3].value += trip.totalBudget * 0.1;
    });

    setChartData(data);
  };

  const handleTripCreated = (newTrip) => {
    setTrips([newTrip, ...trips]);
    prepareChartData([newTrip, ...trips]);
    setShowModal(false);
    toast.success('Trip created successfully!');
  };

  const handleTripUpdated = (updatedTrip) => {
    setTrips(trips.map(trip => 
      trip._id === updatedTrip._id ? updatedTrip : trip
    ));
    prepareChartData(trips);
    setShowModal(false);
    setEditingTrip(null);
    toast.success('Trip updated successfully!');
  };

  const handleDeleteTrip = async (tripId) => {
    if (window.confirm('Are you sure you want to delete this trip?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/trips/${tripId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const updatedTrips = trips.filter(trip => trip._id !== tripId);
        setTrips(updatedTrips);
        prepareChartData(updatedTrips);
        toast.success('Trip deleted successfully!');
      } catch (error) {
        console.error('Error deleting trip:', error);
        toast.error('Failed to delete trip');
      }
    }
  };

  const handleEditTrip = (trip) => {
    setEditingTrip(trip);
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto  ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary font-heading dark:text-dark-surface">
            My Trips
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {trips.length} {trips.length === 1 ? 'trip' : 'trips'} in total
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={fetchTrips}
            disabled={loading}
            className="p-2 rounded-lg bg-white dark:bg-dark-surface hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Refresh trips"
          >
            <FiRefreshCw className={`text-gray-600 dark:text-gray-300 ${loading ? 'animate-spin' : ''}`} />
          </button>
          
          <button
            onClick={() => {
              setEditingTrip(null);
              setShowModal(true);
            }}
            className="flex items-center bg-primary dark:bg-dark-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 font-heading transition shadow-md"
          >
            <FiPlus className="mr-2" />
            New Trip
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-dark-surface p-4 rounded-lg shadow-sm border border-gray-200 dark:border-dark-text-secondary">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Trips</h3>
          <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mt-1">
            {trips.length}
          </p>
        </div>
        <div className="bg-white dark:bg-dark-surface p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Budget</h3>
          <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mt-1">
            ${trips.reduce((sum, trip) => sum + trip.totalBudget, 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-white dark:bg-dark-surface p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Spent</h3>
          <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mt-1">
            ${trips.reduce((sum, trip) => sum + (trip.totalSpent || 0), 0).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 ">
        <div className="lg:col-span-3  p-2">
          {trips.length > 0 ? (
            <TripsGrid 
              trips={trips} 
              onEdit={handleEditTrip}
              onDelete={handleDeleteTrip}
            />
          ) : (
            <div className="bg-white dark:bg-dark-surface p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <h3 className="text-lg font-medium text-text-primary dark:text-dark-text-primary mb-2">
                No trips found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {trips.length === 0 
                  ? "You haven't created any trips yet. Get started by creating your first trip!"
                  : "No trips match your current filters."}
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center bg-primary dark:bg-dark-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                <FiPlus className="mr-2" />
                Create Your First Trip
              </button>
            </div>
          )}
        </div>
        
        <div className="lg:col-span-2 space-y-6 ">
          <BudgetChart data={chartData} />
          
          <div className="bg-white dark:bg-dark-surface p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-lg mb-3 text-text-primary dark:text-dark-text-primary">
              Quick Actions
            </h3>
            <button
              onClick={() => {
                setEditingTrip(null);
                setShowModal(true);
              }}
              className="w-full flex items-center justify-center bg-primary dark:bg-dark-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition mb-3"
            >
              <FiPlus className="mr-2" />
              New Trip
            </button>
            <button
              onClick={fetchTrips}
              disabled={loading}
              className="w-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              <FiRefreshCw className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Refreshing...' : 'Refresh Trips'}
            </button>
          </div>
        </div>
      </div>

      {/* Create/Edit Trip Modal */}
      {showModal && (
        <CreateTripModal 
          trip={editingTrip}
          onClose={() => {
            setShowModal(false);
            setEditingTrip(null);
          }} 
          onTripCreated={handleTripCreated}
          onTripUpdated={handleTripUpdated}
        />
      )}
    </div>
  );
};

export default MyTrips;