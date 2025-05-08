// src/features/trips/TripItinerary.jsx
import React from 'react';
import { FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';

const TripItinerary = ({ duration }) => {
  // This is a placeholder - you'll want to fetch actual itinerary data from your backend
  const days = Array.from({ length: duration }, (_, i) => i + 1);

  return (
    <div className="bg-white dark:bg-dark-surface rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
        Trip Itinerary
      </h2>
      <div className="space-y-4">
        {days.map(day => (
          <div key={day} className="border-l-2 border-primary dark:border-dark-primary pl-4 py-2">
            <h3 className="font-medium text-text-primary dark:text-dark-text-primary mb-1">
              Day {day}
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <div className="flex items-center gap-2">
                <FiClock className="flex-shrink-0" />
                <span>Morning: Exploring local attractions</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="flex-shrink-0" />
                <span>Lunch at recommended restaurant</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="flex-shrink-0" />
                <span>Evening: Cultural experience</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripItinerary;