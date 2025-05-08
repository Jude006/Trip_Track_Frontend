import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExchangeAlt, FaRobot, FaChartPie } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'

const FeatureHighlights = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate()

  const tabs = [
    {
      id: 0,
      label: "Expense Splitting",
      icon: <FaExchangeAlt className="mr-2" />,
      content: (
        <div className="space-y-6 text-text-primary dark:text-dark-text-secondary">
          <h3 className="text-2xl md:text-start text-center font-bold text-primary dark:text-dark-primary">
            Smart Splitting Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-surface p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                <h4 className="font-semibold">Equal Split</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Automatically divide costs evenly among all trip members
              </p>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>Hotel: ₦75,000</span>
                  <span className="text-secondary">₦25,000 each</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-surface p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
                <h4 className="font-semibold">Custom Split</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Assign specific amounts to each person
              </p>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between text-sm mb-1">
                  <span>David</span>
                  <span className="text-primary">₦40,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Sarah</span>
                  <span className="text-primary">₦35,000</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      label: "AI Assistant",
      icon: <FaRobot className="mr-2" />,
      content: (
        <div className="space-y-6 text-text-primary dark:text-dark-text-secondary">
          <h3 className="text-2xl md:text-start text-center font-bold text-primary dark:text-dark-primary">
            Your Travel AI Guide
          </h3>
          <div className="bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">AI is thinking...</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-[80%]">
                  <p className="text-gray-800 dark:text-gray-200">
                    What's the best budget for a week in Dubai for 3 people?
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex"
              >
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center">
                    <FaRobot className="text-primary dark:text-dark-primary" />
                  </div>
                </div>
                <div className="bg-primary/10 dark:bg-dark-primary/10 rounded-lg p-3 max-w-[80%]">
                  <p className="text-gray-800 dark:text-gray-200">
                    For a comfortable Dubai trip: <br />
                    • Hotels: $1,200 (4-star) <br />
                    • Food: $600 <br />
                    • Activities: $900 <br />
                    • Transport: $300 <br />
                    <span className="font-semibold mt-2 block">Total: $3,000 ($1,000/person)</span>
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask AI anything..."
                    className="w-full p-3 pl-4 pr-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary"
                  />
                  <button onClick={()=>navigate('/dashboard/ai-assistant')} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary dark:text-dark-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      label: "Dashboard",
      icon: <FaChartPie className="mr-2" />,
      content: (
        <div className="space-y-6 text-text-primary dark:text-dark-text-secondary">
          <h3 className="text-2xl md:text-start text-center font-bold text-primary dark:text-dark-primary">
            Your Financial Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-dark-surface p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h4 className="font-semibold mb-4">Budget Summary</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500 dark:text-gray-400">Total Budget</span>
                    <span>₦150,000</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ delay: 0.3 }}
                      className="h-full bg-primary dark:bg-dark-primary"
                    />
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Spent</p>
                    <p className="font-medium">₦97,500</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Remaining</p>
                    <p className="font-medium text-secondary">₦52,500</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-dark-surface p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h4 className="font-semibold mb-4">Spending by Category</h4>
              <div className="flex items-center justify-center h-40">
                <div className="relative w-32 h-32">
                  {/* Pie chart segments */}
                  <svg className="w-full h-full" viewBox="0 0 32 32">
                    <motion.circle
                      cx="16"
                      cy="16"
                      r="15.9155"
                      fill="none"
                      stroke="#F59E0B" // accent
                      strokeWidth="8"
                      strokeDasharray="40 100"
                      initial={{ strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ delay: 0.4 }}
                    />
                    <motion.circle
                      cx="16"
                      cy="16"
                      r="15.9155"
                      fill="none"
                      stroke="#10B981" // secondary
                      strokeWidth="8"
                      strokeDasharray="30 100"
                      strokeDashoffset="40"
                      initial={{ strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 40 }}
                      transition={{ delay: 0.5 }}
                    />
                    <motion.circle
                      cx="16"
                      cy="16"
                      r="15.9155"
                      fill="none"
                      stroke="#3B82F6" // primary
                      strokeWidth="8"
                      strokeDasharray="20 100"
                      strokeDashoffset="70"
                      initial={{ strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 70 }}
                      transition={{ delay: 0.6 }}
                    />
                    <motion.circle
                      cx="16"
                      cy="16"
                      r="15.9155"
                      fill="none"
                      stroke="#DC2626" // error
                      strokeWidth="8"
                      strokeDasharray="10 100"
                      strokeDashoffset="90"
                      initial={{ strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 90 }}
                      transition={{ delay: 0.7 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">₦97.5k</span>
                  </div>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
                    <span className="text-sm">Accommodation (40%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                    <span className="text-sm">Food (30%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm">Transport (20%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-error mr-2"></div>
                    <span className="text-sm">Other (10%)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-dark-background ">
      <div className="max-w-6xl mx-auto md:px-6 px-1">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 font-heading text-text-primary dark:text-dark-text-primary"
        >
          Powerful <span className="text-primary dark:text-dark-primary">Features</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto ">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full flex items-center text-sm font-medium transition-colors ${activeTab === tab.id 
                  ? 'bg-primary text-white dark:bg-dark-primary' 
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-background dark:bg-dark-surface rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 md:p-8 p-2 "
            >
              {tabs[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;