import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const InviteTravelerModal = ({ tripId, onClose, onInvited }) => {
  const [email, setEmail] = useState('');

  const handleInvite = async () => {
    if (!email.trim()) return toast.error('Please enter an email');
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/trips/${tripId}/invite`, 
        { email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success('Traveler invited!');
      onInvited(res.data.trip);
      onClose();
    }catch (err) {
      console.error('Invite error:', err.response || err.message || err);
      toast.error(err.response?.data?.message || 'Invite failed');
    }    
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white dark:bg-dark-surface p-6 rounded-xl w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Invite Traveler</h2>
        <input
          type="email"
          placeholder="Traveler's Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg">Cancel</button>
          <button onClick={handleInvite} className="px-4 py-2 bg-primary text-white rounded-lg">Invite</button>
        </div>
      </div>
    </div>
  );
};

export default InviteTravelerModal;
