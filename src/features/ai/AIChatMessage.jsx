// AIChatMessage.jsx (fixed dark mode text)
import React from 'react';
import { FiUser } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';

const AIChatMessage = ({ message, sender, timestamp }) => {
  return (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-xs md:max-w-md lg:max-w-lg ${sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
        <div className={`p-2 rounded-full ${sender === 'user' ? 'bg-primary text-white dark:bg-dark-primary' : 'bg-accent text-white'}`}>
          {sender === 'user' ? <FiUser /> : <FaRobot />}
        </div>
        <div className={`rounded-2xl p-4 ${sender === 'user' ? 'bg-primary text-white dark:bg-dark-primary' : 'bg-gray-100 dark:bg-gray-700'}`}>
          <p className={`whitespace-pre-wrap text-sm md:text-base ${sender !== 'user' ? 'text-gray-800 dark:text-gray-100' : ''}`}>
            {message}
          </p>
          <p className={`text-xs mt-2 ${sender === 'user' ? 'text-white text-opacity-80' : 'text-gray-500 dark:text-gray-400'}`}>
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIChatMessage;