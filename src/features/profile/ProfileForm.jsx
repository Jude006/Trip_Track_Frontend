import React, { useState, useEffect } from 'react';

const ProfileForm = ({ user, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    location: '',
    website: '',
    twitter: '',
    instagram: '',
    facebook: '',
    currency: 'USD'
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.profile?.firstName || '',
        lastName: user.profile?.lastName || '',
        bio: user.profile?.bio || '',
        location: user.profile?.location || '',
        website: user.profile?.website || '',
        twitter: user.profile?.socialMedia?.twitter || '',
        instagram: user.profile?.socialMedia?.instagram || '',
        facebook: user.profile?.socialMedia?.facebook || '',
        currency: user.preferences?.currency || 'USD'
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      'profile.firstName': formData.firstName,
      'profile.lastName': formData.lastName,
      'profile.bio': formData.bio,
      'profile.location': formData.location,
      'profile.website': formData.website,
      'profile.socialMedia.twitter': formData.twitter,
      'profile.socialMedia.instagram': formData.instagram,
      'profile.socialMedia.facebook': formData.facebook,
      'preferences.currency': formData.currency
    };
    onSubmit(updatedData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg dark:bg-dark-surface dark:border-gray-600 dark:text-dark-text-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg dark:bg-dark-surface dark:border-gray-600 dark:text-dark-text-primary"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-1">
          Bio
        </label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border rounded-lg dark:bg-dark-surface dark:border-gray-600 dark:text-dark-text-primary"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg dark:bg-dark-surface dark:border-gray-600 dark:text-dark-text-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-1">
            Website
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg dark:bg-dark-surface dark:border-gray-600 dark:text-dark-text-primary"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-text-primary dark:text-dark-text-primary">
          Social Links
        </h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-1">
              Twitter
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
                @
              </span>
              <input
                type="text"
                name="twitter"
                value={formData.twitter}
                onChange={handleSocialChange}
                className="flex-1 px-4 py-2 border rounded-r-lg dark:bg-dark-surface dark:border-gray-600 dark:text-dark-text-primary"
              />
            </div>
          </div>
          {/* Repeat similar blocks for Instagram and Facebook */}
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="bg-primary dark:bg-dark-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;