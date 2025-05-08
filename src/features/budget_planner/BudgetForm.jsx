import React, { useState } from 'react';
import { FiX, FiDollarSign, FiCalendar, FiPlus, FiMapPin } from 'react-icons/fi';

const BudgetForm = ({ trips, onSubmit, onCancel, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [totalAmount, setTotalAmount] = useState(initialData?.totalAmount || '');
  const [currency, setCurrency] = useState(initialData?.currency || 'USD');
  const [tripId, setTripId] = useState(initialData?.trip?._id || '');
  const [categories, setCategories] = useState(
    initialData?.categories?.length > 0 
      ? initialData.categories 
      : [{ name: '', allocated: '' }]
  );

  const handleCategoryChange = (index, field, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index][field] = field === 'allocated' ? parseFloat(value) || 0 : value;
    setCategories(updatedCategories);
  };

  const addCategory = () => {
    setCategories([...categories, { name: '', allocated: '' }]);
  };

  const removeCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetData = {
      name,
      totalAmount: parseFloat(totalAmount),
      currency,
      categories: categories.filter(cat => cat.name && cat.allocated),
      tripId: tripId || undefined
    };
    onSubmit(budgetData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-surface dark:bg-dark-surface rounded-lg p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold dark:text-dark-text-primary font-heading">
            {initialData ? 'Edit Budget' : 'Create New Budget'}
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
              Budget Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                Total Amount
              </label>
              <div className="relative">
                <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="number"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg pl-10 pr-3 py-2 bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
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
              Categories
            </label>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={category.name}
                    onChange={(e) => handleCategoryChange(index, 'name', e.target.value)}
                    className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
                    placeholder="Category name"
                  />
                  <div className="relative w-24">
                    <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="number"
                      value={category.allocated}
                      onChange={(e) => handleCategoryChange(index, 'allocated', e.target.value)}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg pl-10 pr-3 py-2 bg-white dark:bg-dark-background text-text-primary dark:text-dark-text-primary"
                      min="0"
                      step="0.01"
                      placeholder="Amount"
                    />
                  </div>
                  {categories.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeCategory(index)}
                      className="text-error dark:text-dark-error hover:text-red-700 dark:hover:text-red-400 p-2"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addCategory}
                className="flex items-center text-primary dark:text-dark-primary hover:text-blue-700 dark:hover:text-blue-400 text-sm"
              >
                <FiPlus className="mr-1" /> Add Category
              </button>
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
              {initialData ? 'Update Budget' : 'Create Budget'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

BudgetForm.defaultProps = {
  trips: [],
  initialData: null
};

export default BudgetForm;