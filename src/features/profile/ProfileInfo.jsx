import React from 'react';

const ProfileInfo = ({ user }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary">
          {user.profile?.firstName || 'User'} {user.profile?.lastName}
        </h2>
        {user.profile?.bio && (
          <p className="mt-2 text-text-secondary dark:text-dark-text-secondary">
            {user.profile.bio}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {user.profile?.location && (
          <div>
            <h3 className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
              Location
            </h3>
            <p className="text-text-primary dark:text-dark-text-primary">
              {user.profile.location}
            </p>
          </div>
        )}
        {user.profile?.website && (
          <div>
            <h3 className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
              Website
            </h3>
            <a
              href={user.profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-dark-primary hover:underline"
            >
              {user.profile.website}
            </a>
          </div>
        )}
      </div>

      {(user.profile?.socialMedia?.twitter || 
        user.profile?.socialMedia?.instagram || 
        user.profile?.socialMedia?.facebook) && (
        <div>
          <h3 className="text-lg font-medium text-text-primary dark:text-dark-text-primary mb-2">
            Social Links
          </h3>
          <div className="flex space-x-4">
            {user.profile.socialMedia.twitter && (
              <a
                href={`https://twitter.com/${user.profile.socialMedia.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500"
              >
                Twitter
              </a>
            )}
            {/* Add similar links for Instagram and Facebook */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;