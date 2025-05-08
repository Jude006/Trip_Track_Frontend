// src/features/trips/EditTripModal.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FiX, FiMapPin, FiCalendar, FiDollarSign, FiUpload } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const EditTripModal = ({ trip, onClose, onTripUpdated }) => {
  const [formData, setFormData] = useState({
    title: '',
    destination: '',
    startDate: '',
    endDate: '',
    totalBudget: ''
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (trip) {
      setFormData({
        title: trip.title,
        destination: trip.destination,
        startDate: new Date(trip.startDate).toISOString().split('T')[0],
        endDate: new Date(trip.endDate).toISOString().split('T')[0],
        totalBudget: trip.totalBudget
      });
      if (trip.coverImage?.url) {
        setPreviewImage(trip.coverImage.url);
      }
    }
  }, [trip]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError(null);
    
    try {
      const token = localStorage.getItem('token');
      const form = new FormData();
      
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });
      
      if (fileInputRef.current?.files[0]) {
        form.append('coverImage', fileInputRef.current.files[0]);
      }

      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/trips/${trip._id}`,
        form,
        {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      onTripUpdated(res.data);
    } catch (error) {
      console.error('Error updating trip:', error);
      setError(error.response?.data?.error || 'Failed to update trip. Please try again.');
      toast.error('Failed to update trip');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-dark-surface rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary">
            Edit Trip
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-1"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-200 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 dark:text-dark-text-secondary">
          <div className="flex flex-col items-center">
            <div className="w-full h-48 mb-2 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              {previewImage ? (
                <img 
                  src={previewImage.startsWith('blob:') ? previewImage : `${import.meta.env.VITE_BACKEND_URL}${previewImage}`}
                  alt="Preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <FiUpload className="text-gray-400 text-3xl" />
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
              id="coverImage"
            />
            <label 
              htmlFor="coverImage"
              className="text-sm text-primary dark:text-dark-primary cursor-pointer hover:underline"
            >
              {previewImage ? 'Change Cover Image' : 'Add Cover Image (Optional)'}
            </label>
          </div>

          <div className="relative">
            <FiMapPin className="absolute left-3 top-3 text-gray-400" />
            <input
              name="title"
              type="text" 
              placeholder="Trip Title"
              className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-dark-background dark:border-gray-600"
              value={formData.title} 
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <FiMapPin className="absolute left-3 top-3 text-gray-400" />
            <input
              name="destination"
              type="text"
              placeholder="Destination"
              className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-dark-background dark:border-gray-600"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <FiCalendar className="absolute left-3 top-3 text-gray-400" />
              <input
                name="startDate"
                type="date"
                className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-dark-background dark:border-gray-600"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FiCalendar className="absolute left-3 top-3 text-gray-400" />
              <input
                name="endDate"
                type="date"
                className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-dark-background dark:border-gray-600"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="relative">
            <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
            <input
              name="totalBudget"
              type="number"
              placeholder="Total Budget ($)"
              className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-dark-background dark:border-gray-600"
              value={formData.totalBudget}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg dark:border-gray-600 text-text-primary dark:text-dark-text-primary"
              disabled={uploading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary dark:bg-dark-primary text-white rounded-lg hover:bg-opacity-90 disabled:opacity-50"
              disabled={uploading}
            >
              {uploading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Updating...
                </span>
              ) : 'Update Trip'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTripModal;