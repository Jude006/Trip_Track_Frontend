import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExchangeAlt, FaChartPie, FaUsers, FaWallet, FaMobileAlt } from 'react-icons/fa';

const CoreFeaturesShowcase = () => {
  const [activeTab, setActiveTab] = useState('expenses');
  
  const features = [
    {
      id: 'expenses',
      title: "Smart Expense Tracking",
      icon: <FaWallet className="text-primary dark:text-dark-primary" />,
      description: "Real-time logging with automatic currency conversion",
      highlight: "No more lost receipts",
      video: "/features/expense-tracking.mp4",
      mobileVideo: "/features/mobile-expense.mp4"
    },
    {
      id: 'splits',
      title: "AI-Powered Splits",
      icon: <FaExchangeAlt className="text-secondary dark:text-secondary" />,
      description: "Context-aware suggestions for fair divisions",
      highlight: "Adapts to group dynamics",
      video: "/features/split-suggestions.mp4",
      mobileVideo: "/features/mobile-splits.mp4"
    },
    {
      id: 'dashboard',
      title: "Group Dashboard",
      icon: <FaUsers className="text-accent dark:text-accent" />,
      description: "Live updates with predictive budget forecasting",
      highlight: "Everyone stays informed",
      video: "/features/group-dashboard.mp4",
      mobileVideo: "/features/mobile-dashboard.mp4"
    },
    {
      id: 'analytics',
      title: "Advanced Analytics",
      icon: <FaChartPie className="text-primary dark:text-dark-primary" />,
      description: "Visual spending patterns and trend analysis",
      highlight: "Smarter trip planning",
      video: "/features/analytics.mp4",
      mobileVideo: "/features/mobile-analytics.mp4"
    }
  ];

  const activeFeature = features.find(f => f.id === activeTab);

  return (
    <section className="relative py-20 bg-white dark:bg-dark-surface overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex px-4 py-2 bg-primary/10 dark:bg-dark-primary/10 rounded-full mb-6 border border-primary/20 dark:border-dark-primary/20">
            <span className="text-primary dark:text-dark-primary font-medium">
              Core Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-6">
            Powerful Tools for <span className="text-primary dark:text-dark-primary">Stress-Free</span> Travel
          </h2>
          <p className="text-gray-700 dark:text-dark-text-secondary max-w-2xl mx-auto">
            Designed specifically for group travel dynamics with thoughtful details that make all the difference
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide md:mt-20 gap-4">
            {features.map((feature) => (
              <motion.button
                key={feature.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(feature.id)}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl text-left min-w-max lg:min-w-[280px] transition-all ${activeTab === feature.id 
                  ? 'bg-primary/10 dark:bg-dark-primary/10 border border-primary/20 dark:border-dark-primary/20' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                <div className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-xs">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-dark-text-primary">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-dark-text-secondary">{feature.highlight}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Demo display */}
          <div className="flex-1">
            <div className="relative rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 aspect-video">
              <video 
                key={activeTab}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src={activeFeature.video}
              />
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="flex bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg border border-gray-200 dark:border-gray-700">
                  <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'mobile' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                  >
                    Desktop
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${activeTab === 'mobile' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                  >
                    <FaMobileAlt className="text-xs" /> Mobile
                  </button>
                </div>
              </div>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-2">
                {activeFeature.title}
              </h3>
              <p className="text-gray-700 dark:text-dark-text-secondary mb-4">
                {activeFeature.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Automatic expense categorization",
                  "Multi-currency support",
                  "Customizable split rules",
                  "Real-time group notifications"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary dark:bg-dark-primary"></div>
                    </div>
                    <span className="text-gray-700 dark:text-dark-text-secondary text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{
          x: [0, 15, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className="absolute top-1/3 right-10 w-64 h-64 bg-primary/5 dark:bg-dark-primary/5 rounded-full blur-[80px] -z-10"
      />
    </section>
  );
};

export default CoreFeaturesShowcase;