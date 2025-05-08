import React, { useState } from 'react';
import { FiX, FiDollarSign, FiCalendar, FiTag, FiUpload, FiMapPin } from 'react-icons/fi';

const ExpenseForm = ({ trips, onSubmit, onCancel, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [amount, setAmount] = useState(initialData?.amount || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [date, setDate] = useState(initialData?.date ? new Date(initialData.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState(initialData?.notes || '');
  const [receipt, setReceipt] = useState(initialData?.receipt || null);
  const [tripId, setTripId] = useState(initialData?.trip?._id || '');

  const categories = [
    'Food & Dining',
    'Transportation',
    'Accommodation',
    'Entertainment',
    'Shopping',
    'Health',
    'Education',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      amount: parseFloat(amount),
      category,
      date,
      notes,
      receipt,
      tripId: tripId || undefined
    };
    onSubmit(expenseData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReceipt(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-surface dark:bg-dark-surface rounded-lg p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold dark:text-dark-text-primary font-heading">
            {initialData ? 'Edit Expense' : 'Add New Expense'}
          </h2>
          <button 
            onClick={onCancel}
            className="text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary"
          >
            <FiX size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                Amount
              </label>
              <div className="relative">
                <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg pl-10 pr-3 py-2 bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                Date
              </label>
              <div className="relative">
                <FiCalendar className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg pl-10 pr-3 py-2 bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
              Category
            </label>
            <div className="relative">
              <FiTag className="absolute left-3 top-3 text-gray-400" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg pl-10 pr-3 py-2 bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
              Link to Trip (Optional)
            </label>
            <div className="relative">
              <FiMapPin className="absolute left-3 top-3 text-gray-400" />
              <select
                value={tripId}
                onChange={(e) => setTripId(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg pl-10 pr-3 py-2 bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
              >
                <option value="">Select a trip</option>
                {trips.map(trip => (
                  <option key={trip._id} value={trip._id}>
                    {trip.title} - {trip.destination}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
              rows="3"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
              Receipt
            </label>
            <div className="flex items-center gap-2">
              <label className="cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center gap-2 transition">
                <FiUpload />
                {receipt ? (typeof receipt === 'string' ? 'Receipt uploaded' : receipt.name) : 'Upload Receipt'}
                <input 
                  type="file" 
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*,.pdf"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition text-text-primary dark:text-dark-text-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary dark:bg-dark-primary text-white rounded-lg hover:bg-opacity-90 transition"
            >
              {initialData ? 'Update Expense' : 'Add Expense'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ExpenseForm.defaultProps = {
  trips: [],
  initialData: null
};

export default ExpenseForm;