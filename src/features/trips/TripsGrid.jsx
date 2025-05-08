import React from 'react';
import TripCard from './TripCard';

const TripsGrid = ({ trips, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {trips.map(trip => (
        <TripCard 
          key={trip._id} 
          trip={trip} 
          onEdit={() => onEdit(trip)}
          onDelete={() => onDelete(trip._id)}
        />
      ))}
    </div>
  );
};

export default TripsGrid;