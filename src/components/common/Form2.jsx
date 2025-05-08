import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import AuthButton from './button/AuthButton';
import { Link, useNavigate } from 'react-router-dom';
import GoogleAuthButton from './button/GoogleAuthButton';
import axios from 'axios';

const Form2 = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSigningUp(true);
    setError('');
    
    try {
      if (!userName || !email || !password) {
        throw new Error('All fields are required');
      }

      const response = await axios.post(`${backendUrl}/api/auth/signup`, {
        userName,
        email,
        password
      });

      if (!response.data.token) {
        throw new Error('Authentication failed. No token received');
      }

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      navigate('/dashboard');
      
    } catch (error) {
      console.error("Error signing up:", error);
      setError(error.response?.data?.message || error.message || "Error signing up. Please try again.");
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <div className='p-6 rounded shadow-md bg-surface max-w-md w-full dark:bg-dark-surface text-text-primary dark:text-dark-text-primary'>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <img src="/images/logo.PNG" alt="" />
        <h1 className='font-Dancing md:text-3xl text-2xl font-semibold'>Create Your Account</h1>
        <p className='md:text-start text-center'>Join us to access personalized Trip Budget</p>
      </div>
      <form onSubmit={handleSubmit} className='space-y-4 py-4'>
        {error && <p className='text-red-600 text-sm mb-4'>{error}</p>}
        
        <div className='relative'>
          <FaUser className='absolute top-3 left-3 right-4 text-gray-400' />
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required 
            type="text" 
            name="userName"
            placeholder='Username' 
            className='w-full pl-10 pr-4 border border-text-surface dark:border-dark-text-secondary bg-background dark:bg-dark-background py-2 px-4 rounded-lg text-text-primary dark:text-dark-text-primary'
          />
        </div>
        
        <div className='relative'>
          <FaEnvelope className='absolute top-3 left-3 right-4 text-gray-400' />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            type="email" 
            name="email"
            placeholder='Email' 
            className='w-full pl-10 pr-4 border border-text-surface dark:border-dark-text-secondary bg-background dark:bg-dark-background py-2 px-4 rounded-lg text-text-primary dark:text-dark-text-primary'
          />
        </div>
        
        <div className='relative'>
          <FaLock className='absolute top-3 left-3 right-4 text-gray-400' />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            type="password" 
            name="password"
            placeholder='Password' 
            className='w-full pl-10 pr-4 border border-text-surface dark:border-dark-text-secondary bg-background dark:bg-dark-background py-2 px-4 rounded-lg text-text-primary dark:text-dark-text-primary'
          />
        </div>
        
        <div className=''>
          <AuthButton 
            disabled={isSigningUp} 
            text={isSigningUp ? 'Signing Up...' : 'SignUp'} 
            color='bg-primary dark:bg-dark-primary text-surface dark:dark-text-primary' 
            hover='hover:bg-background hover:dark:bg-dark-background hover:border border-text-surface dark:border-dark-text-secondary shadow hover:text-text-primary hover:text-dark-text-primary' 
            className='w-full'
          />
        </div>
        
        <div className="flex items-center my-2">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="px-3 text-sm text-gray-500 dark:text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        
        <GoogleAuthButton />
        
        <div className='text-center w-full pt-2'>
          <span className='text-sm'>Already have an account? </span>
          <Link to='/auth/login' className='underline text-sm text-primary dark:text-dark-primary'>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Form2;