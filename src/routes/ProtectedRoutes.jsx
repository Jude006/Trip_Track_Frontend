import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const token = localStorage.getItem('token')
  
  if(!token){
    return <Navigate to='/auth/login' replace />
  }

  return (

  <Outlet />
  )
}

export default ProtectedRoutes
