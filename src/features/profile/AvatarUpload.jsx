import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const AvatarUpload = ({ user, onUpdate }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("avatar", file);

      const token = localStorage.getItem("token");
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload-avatar`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.success) {
        onUpdate(data.user);
        toast.success("Avatar updated successfully!");
      } else {
        throw new Error(data.message || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to upload avatar"
      );
    } finally {
      setIsUploading(false);
    }
  };
  return (
    <div className="bg-surface dark:bg-dark-surface p-6 rounded-lg shadow text-center">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <img
          src={
            `${import.meta.env.VITE_BACKEND_URL}${user?.profile?.avatar}` ||
            "/default-avatar.png"
          }
          alt="Profile"
          className="w-full h-full rounded-full object-cover border-4 border-primary dark:border-dark-primary"
          onError={(e) => {
            e.target.src = "/default-avatar.png";
          }}
        />
        {isUploading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
            <span className="text-white">Uploading...</span>
          </div>
        )}
      </div>
      <label className="cursor-pointer">
        <span className="bg-primary dark:bg-dark-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
          Change Avatar
        </span>
        <input
          type="file"
          accept="image/jpeg, image/png, image/gif"
          onChange={handleFileUpload}
          className="hidden"
          disabled={isUploading}
        />
      </label>
    </div>
  );
};

export default AvatarUpload;
