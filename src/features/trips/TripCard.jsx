import React from 'react';
import { FiMapPin, FiCalendar, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TripCard = ({ trip, onEdit, onDelete }) => {
  const progress = Math.min((trip.totalSpent / trip.totalBudget) * 100 || 0, 100);
  const coverImage = trip.coverImage?.url || `https://source.unsplash.com/random/600x400/?${trip.destination}`;

  return (
    <div className="bg-white dark:bg-dark-surface rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="h-48 relative group">
        <img
          src={coverImage.startsWith('/') ? `${import.meta.env.VITE_BACKEND_URL}${coverImage}` : coverImage}
          alt={trip.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://source.unsplash.com/random/600x400/?travel,${trip.destination}`;
          }}
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FiEdit className="text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FiTrash2 className="text-red-500 dark:text-red-400" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-text-primary dark:text-dark-text-primary line-clamp-1 font-heading">
          {trip.title}
        </h3>

        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
          <FiMapPin className="mr-2 flex-shrink-0" />
          <span className="truncate">{trip.destination}</span>
        </div>

        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 text-sm">
          <FiCalendar className="mr-2 flex-shrink-0" />
          <span>
            {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
          </span>
        </div>

        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 dark:text-gray-300">Budget</span>
            <span className="font-medium text-text-primary dark:text-dark-text-primary">
              ${(trip.totalSpent || 0).toLocaleString()} / ${trip.totalBudget.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-primary dark:bg-dark-primary h-2 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Link
          to={`/dashboard/trip-details/${trip._id}`}
          className="block w-full text-center bg-primary dark:bg-dark-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TripCard;

