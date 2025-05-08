import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const GoogleAuthButton = () => {
  return (
    <Link 
      to="http://localhost:3001/api/auth/google"
      className="flex items-center justify-center gap-3 w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2.5 px-4 transition-colors text-sm font-medium"
    >
      <FcGoogle className="text-lg" />
      <span>Continue with Google</span>
    </Link>
  );
}; 

export default GoogleAuthButton;