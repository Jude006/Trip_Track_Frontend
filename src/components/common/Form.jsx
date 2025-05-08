import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import AuthButton from './button/AuthButton';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import GoogleAuthButton from './button/GoogleAuthButton';


const Form = () => {

  const [email, setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[error,setError] = useState('')
  const[isLoggin,setIsLoggin] = useState(false)
  const navigate = useNavigate()

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001'

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setIsLoggin(true)

    try {
      const response = await axios.post(`${backendUrl}/api/auth/login`,{
        email,
        password
      })
      console.log('response data', response.data);

      if(!response.data.token){
        console.log('token is missing in response');
        setError('Authentication failed.No Token Received')
        setIsLoggin(false)
        return;
      }

      localStorage.setItem('token', response.data.token)
      setIsLoggin(false)

      if(response.data.token){
        navigate("/dashboard")
      }else{
        navigate("/")
      }
      
    } catch (error) {
      console.log('Login Error',error);
      
      setIsLoggin(false)
      setError('Invalid email or password')
    }
  }

  return (
    <div className='p-6 rounded shadow-md bg-surface max-w-md w-full dark:bg-dark-surface text-text-primary dark:text-dark-text-primary'>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <img src="/images/logo.PNG" alt="" />
        <h1 className='font-Dancing md:text-3xl text-2xl font-semibold'>Welcome Back</h1>
        <p className=''>Log in to access your account</p>
      </div>
      <form onSubmit={handleSubmit} className='space-y-4 py-4'>

        {error && <p className='text-red-600 text-sm mb-4'>{error}</p>}
        
        <div className='relative'>
          <FaUser className='absolute top-3 left-3 right-4 text-gray-400' />
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
           required type="email" placeholder='Email' className='w-full pl-10 pr-4 border border-text-surface dark:border-dark-text-secondary bg-background dark:bg-dark-background py-2 px-4 rounded-lg text-text-primary dark:text-dark-text-primary'/>
        </div>

        <div className='relative'>
          <FaLock className='absolute top-3 left-3 right-4 text-gray-400' />
          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
           required type="password"
            placeholder='Password' className='w-full pl-10 pr-4 border border-text-surface dark:border-dark-text-secondary bg-background dark:bg-dark-background py-2 px-4 rounded-lg text-text-primary dark:text-dark-text-primary'/>
        </div>

        <div>
          <button type="button" className='text-end w-full text-sm'>Forgot Password?</button>
        </div> 
        <div className=''>
          <AuthButton text={isLoggin ? 'LoggingIn...' : 'Login'} color='bg-primary dark:bg-dark-primary text-surface dark:dark-text-primary' hover='hover:bg-background hover:dark:bg-dark-background hover:border border-text-surface dark:border-dark-text-secondary shadow hover:text-text-primary hover:text-dark-text-primary' className='w-full'
          disabled={isLoggin}
          />
        </div>
        
        <div className="flex items-center my-2">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="px-3 text-sm text-gray-500 dark:text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        
        <GoogleAuthButton />
        
        <div className='text-center w-full pt-2'>
          <span className='text-sm'>Don't have an account? </span>
          <Link to='/auth/signup' className='underline text-sm text-primary dark:text-dark-primary'>Sign Up</Link>
        </div>
      </form>
    </div>
  )
}

export default Form;