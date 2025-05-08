import React, { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'
import { useLocation, useNavigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    
    if (token) {
      localStorage.setItem('token', token);
      
      navigate('/dashboard');
      
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location, navigate]);

  return( 
    <>
    <ScrollToTop />
     <AppRoutes />
    </>
  )
}

export default App