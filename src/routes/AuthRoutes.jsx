import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'

const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default AuthRoutes
