import React from 'react';

const LoadingSpinner = ({ size = 'md' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full ${sizes[size]} border-t-2 border-b-2 border-primary dark:border-dark-primary`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;