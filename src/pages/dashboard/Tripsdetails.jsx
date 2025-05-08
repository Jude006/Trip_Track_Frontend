import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FiArrowLeft,
  FiMapPin,
  FiCalendar,
  FiDollarSign,
  FiUsers,
  FiEdit,
  FiTrash2,
  FiShare2,
  FiDownload,
} from "react-icons/fi";
import { FaHotel, FaUtensils, FaPlane, FaHiking } from "react-icons/fa";
import { toast } from "react-hot-toast";
import BudgetProgress from "../../features/trips/BudgetProgress";
import TripItinerary from "../../features/trips/TripItinerary";
import ExpenseBreakdown from "../../features/trips/ExpenseBreakdown";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import EditTripModal from "../../features/trips/EditTripModal";
import InviteTravelerModal from "../../features/trips/InviteTravelerModal";

const TripDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);

  useEffect(() => {
    if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
      toast.error("Invalid trip ID");
      navigate("/dashboard/my-trips");
      return;
    }

    const fetchTrip = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Authentication required");
          navigate("/login");
          return;
        }

        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/trips/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!res.data) {
          throw new Error("Trip data not found");
        }

        setTrip(res.data);
      } catch (error) {
        console.error("Error fetching trip:", error);
        toast.error(
          error.response?.data?.error || "Failed to load trip details"
        );
        navigate("/dashboard/my-trips");
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [id, navigate]);

  const handleDeleteTrip = async () => {
    if (window.confirm("Are you sure you want to delete this trip?")) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/api/trips/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success("Trip deleted successfully");
        navigate("/dashboard/my-trips");
      } catch (error) {
        console.error("Error deleting trip:", error);
        toast.error(error.response?.data?.error || "Failed to delete trip");
      }
    }
  };

  const handleTripUpdated = (updatedTrip) => {
    setTrip(updatedTrip);
    setShowEditModal(false);
    toast.success("Trip updated successfully!");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
          Trip not found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          The trip you're looking for doesn't exist or you don't have permission
          to view it.
        </p>
        <Link
          to="/dashboard/my-trips"
          className="inline-flex items-center bg-primary dark:bg-dark-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
        >
          <FiArrowLeft className="mr-2" />
          Back to My Trips
        </Link>
      </div>
    );
  }

  // Safely get trip properties with fallbacks
  const coverImage = trip.coverImage?.url
    ? trip.coverImage.url.startsWith("/")
      ? `${import.meta.env.VITE_BACKEND_URL}${trip.coverImage.url}`
      : trip.coverImage.url
    : `https://source.unsplash.com/random/1200x600/?${
        trip.destination || "travel"
      }`;

  const startDate = trip.startDate ? new Date(trip.startDate) : new Date();
  const endDate = trip.endDate ? new Date(trip.endDate) : new Date();
  const duration = Math.max(
    1,
    Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1
  );
  const totalBudget = trip.totalBudget || 0;
  const totalSpent = trip.totalSpent || 0;

  const getInitials = (name) => {
    if (!name) return "?";
    const names = name.split(" ");
    let initials = names[0].charAt(0);
    if (names.length > 1) {
      initials += names[names.length - 1].charAt(0);
    }
    return initials.toUpperCase();
  };

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      {/* Header with Back Button */}
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/dashboard/my-trips"
          className="inline-flex items-center text-primary dark:text-dark-primary hover:underline"
        >
          <FiArrowLeft className="mr-2" />
          Back to My Trips
        </Link>
        <div className="flex gap-2">
          <button
            onClick={() => setShowEditModal(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition"
          >
            <FiEdit size={16} />
            <span className="hidden sm:inline">Edit</span>
          </button>
          <button
            onClick={handleDeleteTrip}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition text-red-500"
          >
            <FiTrash2 size={16} />
            <span className="hidden sm:inline">Delete</span>
          </button>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative rounded-xl overflow-hidden mb-6 h-64 md:h-96 w-full bg-gray-100 dark:bg-gray-800">
        <img
          src={coverImage}
          alt={trip.title || "Trip cover"}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://source.unsplash.com/random/1200x600/?travel,${
              trip.destination || ""
            }`;
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {trip.title || "Untitled Trip"}
          </h1>
          <div className="flex flex-wrap gap-4 mt-2 text-white/90">
            <div className="flex items-center">
              <FiMapPin className="mr-2" />
              <span>{trip.destination || "No destination specified"}</span>
            </div>
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              <span>
                {startDate.toLocaleDateString()} -{" "}
                {endDate.toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center">
              <FiUsers className="mr-2" />
              <span>
                {trip.members ? trip.members.length + 1 : 1} travelers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 font-medium ${
            activeTab === "overview"
              ? "text-primary dark:text-dark-primary border-b-2 border-primary dark:border-dark-primary"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("itinerary")}
          className={`px-4 py-2 font-medium ${
            activeTab === "itinerary"
              ? "text-primary dark:text-dark-primary border-b-2 border-primary dark:border-dark-primary"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          Itinerary
        </button>
        <button
          onClick={() => setActiveTab("expenses")}
          className={`px-4 py-2 font-medium ${
            activeTab === "expenses"
              ? "text-primary dark:text-dark-primary border-b-2 border-primary dark:border-dark-primary"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          Expenses
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Overview Cards */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === "overview" && (
            <>
              <div className="bg-white dark:bg-dark-surface rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
                  Trip Summary
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Total Budget
                    </h3>
                    <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                      ${totalBudget.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Trip Duration
                    </h3>
                    <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                      {duration} days
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Daily Budget
                    </h3>
                    <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                      ${(totalBudget / duration).toFixed(2)}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Travelers
                    </h3>
                    <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                      {trip.members ? trip.members.length + 1 : 1}
                    </p>
                  </div>
                </div>
              </div>

              <BudgetProgress
                totalBudget={totalBudget}
                totalSpent={totalSpent}
              />

              <div className="bg-white dark:bg-dark-surface rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
                  Budget Breakdown
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <FaHotel className="text-primary dark:text-dark-primary text-2xl mb-2" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Accommodation
                    </span>
                    <span className="font-bold text-text-primary dark:text-dark-text-primary">
                      ${(totalBudget * 0.35).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <FaUtensils className="text-primary dark:text-dark-primary text-2xl mb-2" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Food
                    </span>
                    <span className="font-bold text-text-primary dark:text-dark-text-primary">
                      ${(totalBudget * 0.25).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <FaPlane className="text-primary dark:text-dark-primary text-2xl mb-2" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Transport
                    </span>
                    <span className="font-bold text-text-primary dark:text-dark-text-primary">
                      ${(totalBudget * 0.3).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <FaHiking className="text-primary dark:text-dark-primary text-2xl mb-2" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Activities
                    </span>
                    <span className="font-bold text-text-primary dark:text-dark-text-primary">
                      ${(totalBudget * 0.1).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "itinerary" && <TripItinerary duration={duration} />}

          {activeTab === "expenses" && <ExpenseBreakdown />}
        </div>

        {/* Right Column - Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-surface rounded-xl shadow-sm px-6 py-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 bg-primary dark:bg-dark-primary text-white px-4 py-2.5 rounded-lg hover:bg-opacity-90 transition">
                <FiShare2 />
                Share Trip
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-primary dark:text-dark-text-primary px-4 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                <FiDownload />
                Export Details
              </button>
              <button
                onClick={() => setShowEditModal(true)}
                className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-primary dark:text-dark-text-primary px-4 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition"
              >
                <FiEdit />
                Edit Trip
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-surface rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
              Travel Companions
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary dark:bg-dark-primary text-white flex items-center justify-center">
                  {getInitials(trip.createdBy?.name)}
                </div>
                <div>
                  <p className="font-medium text-text-primary dark:text-dark-text-primary">
                    {trip.createdBy?.name || "Unknown"}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Trip Organizer
                  </p>
                </div>
              </div>
              {trip.members?.map((member) => (
                <div
                  key={member._id}
                  className="flex items-center gap-3 md:mt-8 "
                >
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-text-primary dark:text-dark-text-primary flex items-center justify-center">
                    {getInitials(member.name)}
                  </div>
                  <div>
                    <p className="font-medium text-text-primary dark:text-dark-text-primary">
                      {member.name || "Unknown"}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Traveler
                    </p>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setShowInviteModal(true)}
                className="w-full mt-4 text-center text-primary dark:text-dark-primary hover:underline"
              >
                + Invite Travelers
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Trip Modal */}
      {showEditModal && (
        <EditTripModal
          trip={trip}
          onClose={() => setShowEditModal(false)}
          onTripUpdated={handleTripUpdated}
        />
      )}

      {showInviteModal && (
        <InviteTravelerModal
          tripId={trip._id}
          onClose={() => setShowInviteModal(false)}
          onInvited={(updatedTrip) => setTrip(updatedTrip)}
        />
      )}
    </div>
  );
};

export default TripDetails;
