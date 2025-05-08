import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        className={`w-full flex justify-between items-center p-4 text-left ${
          isOpen 
            ? 'bg-primary dark:bg-dark-primary text-surface dark:text-dark-surface'
            : 'bg-surface dark:bg-dark-surface text-text-primary dark:text-dark-text-primary'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <span className="ml-4">
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-surface dark:bg-dark-surface text-text-secondary dark:text-dark-text-secondary">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;