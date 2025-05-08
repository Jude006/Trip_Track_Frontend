import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Layouts from '../components/common/Layouts'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import AuthRoutes from './AuthRoutes'
import DashboardRoutes from './DashboardRoutes'     
import Demo from '../pages/Demo'
import ProtectedRoutes from './ProtectedRoutes'
import TermsAndPrivacy from '../pages/TermsAndPrivacy'

const AppRoutes = () => {
  return ( 
    <Routes>
        <Route element={<Layouts />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/demo' element={<Demo />} />
            <Route path='/terms' element={<TermsAndPrivacy />} />
            <Route path='/auth/*' element={<AuthRoutes />} />
            <Route element={<ProtectedRoutes />}>
            <Route path='/dashboard/*' element={<DashboardRoutes />} />
            </Route>


            {/* the not found rpoute */}
            <Route path='*' element={<NotFound />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes
