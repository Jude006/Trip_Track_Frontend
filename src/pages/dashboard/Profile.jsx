import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import ProfileInfo from "../../features/profile/ProfileInfo";
import ProfileForm from "../../features/profile/ProfileForm";
import ThemeSwitcher from "../../features/profile/ThemeSwitcher";
import AvatarUpload from "../../features/profile/AvatarUpload";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(data);
      } catch (error) {
        toast.error("Failed to load profile");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleUpdateProfile = async (updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/profile`,
        updatedData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(data);
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto dark:bg-dark-background min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 space-y-6">
          <AvatarUpload
            user={user}
            onUpdate={(updatedUser) => setUser(updatedUser)}
          />
          <ThemeSwitcher
            currentTheme={user.preferences.theme}
            onThemeChange={(theme) =>
              handleUpdateProfile({ "preferences.theme": theme })
            }
          />
        </div>

        <div className="md:w-2/3">
          <div className="bg-surface dark:bg-dark-surface p-6 md:min-h-[56vh] rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold dark:text-dark-text-primary font-heading">
                Profile Settings
              </h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-primary dark:bg-dark-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            {isEditing ? (
              <ProfileForm user={user} onSubmit={handleUpdateProfile} />
            ) : (
              <ProfileInfo user={user} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
