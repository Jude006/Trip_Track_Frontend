import { useState, useEffect } from 'react';
import axios from 'axios';

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/profile`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};