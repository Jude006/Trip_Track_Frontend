import React from 'react';
import { FaLightbulb, FaMoneyBillWave, FaRoute } from 'react-icons/fa';
import { FiMapPin, FiClock, FiUsers } from 'react-icons/fi';

const AIPromptSuggestions = ({ onSuggestionClick, tripDetails }) => {
  const budgetPerDay = Math.floor(tripDetails.budget / tripDetails.duration);
  
  const suggestions = [
    {
      icon: <FaMoneyBillWave className="text-accent" />,
      text: `Suggest a budget breakdown for ${tripDetails.duration} days in ${tripDetails.destination}`
    },
    {
      icon: <FiClock className="text-accent" />,
      text: `Create a ${tripDetails.duration}-day itinerary for ${tripDetails.destination}`
    },
    {
      icon: <FaLightbulb className="text-accent" />,
      text: `What are the must-see attractions in ${tripDetails.destination}?`
    },
    {
      icon: <FiUsers className="text-accent" />,
      text: `Best activities for ${tripDetails.travelers} travelers in ${tripDetails.destination}`
    },
    {
      icon: <FaRoute className="text-accent" />,
      text: `Most efficient transportation options in ${tripDetails.destination}`
    },
    {
      icon: <FiMapPin className="text-accent" />,
      text: `Hidden gems and local favorites in ${tripDetails.destination}`
    },
    {
      icon: <FaMoneyBillWave className="text-accent" />,
      text: `How to save money while visiting ${tripDetails.destination}`
    },
    {
      icon: <FiClock className="text-accent" />,
      text: `Best time of year to visit ${tripDetails.destination}`
    }
  ];

  return (
    <div className="bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5 mb-6">
      <div className="flex items-center mb-4 gap-2">
        <FaLightbulb className="text-accent text-lg" />
        <h3 className="font-medium text-text-primary dark:text-dark-text-primary">
          Quick Suggestions
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion.text)}
            className="text-left p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-start gap-3"
          >
            <div className="mt-0.5">
              {suggestion.icon}
            </div>
            <span className="text-sm text-text-primary dark:text-dark-text-primary">
              {suggestion.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AIPromptSuggestions;