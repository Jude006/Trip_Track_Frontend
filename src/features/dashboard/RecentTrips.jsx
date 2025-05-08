import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const RecentTrips = ({ trips }) => {
  const navigate = useNavigate();

  if (trips.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">
          No recent trips found. Create your first trip!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {trips.slice(0, 3).map(trip => (
        <div 
          key={trip._id}
          onClick={() => navigate(`/dashboard/trip-details/${trip._id}`)}
          className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition"
        >
          <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mr-3">
            <FiMapPin className="text-blue-500 dark:text-blue-300" />
          </div>
          <div>
            <h3 className="font-medium text-text-primary dark:text-dark-text-primary">
              {trip.destination}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
            </p>
          </div>
          <div className="ml-auto text-sm font-medium">
            ${trip.totalBudget}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTrips;