import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AcceptInvitePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const tripId = searchParams.get('tripId');
  const email = searchParams.get('email');
  const [loading, setLoading] = useState(true);
  const [joined, setJoined] = useState(false);

  const handleJoin = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('You must be logged in to accept invite');
      return navigate('/login');
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/trips/${tripId}/accept-invite`, 
        { email },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success('You’ve joined the trip!');
      setJoined(true);
      navigate(`/trip/${tripId}`);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to join');
    }
  };

  useEffect(() => {
    if (!tripId || !email) {
      toast.error('Invalid invite link.');
      navigate('/dashboard/my-trips');
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">You've been invited to a trip</h1>
      <p className="mb-4">Email: <strong>{email}</strong></p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleJoin}
        disabled={joined}
      >
        {joined ? 'Joined!' : 'Join Trip'}
      </button>
    </div>
  );
};

export default AcceptInvitePage;
