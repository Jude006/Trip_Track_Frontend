import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaTimes } from 'react-icons/fa';

const UseCaseComparison = () => {
  const [activeTab, setActiveTab] = useState('manual');

  const comparisons = [
    {
      id: 'manual',
      title: "Manual Tracking",
      icon: "📝",
      painPoints: [
        "Endless spreadsheets",
        "Awkward money conversations",
        "Last-minute budget surprises",
        "Uneven spending tension"
      ]
    },
    {
      id: 'triptrack',
      title: "TripTrack",
      icon: "✨",
      benefits: [
        "AI-powered automatic tracking",
        "Fair split suggestions",
        "Real-time budget alerts",
        "Transparent group overview"
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-dark-background overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/30 to-gray-50/30 dark:from-dark-background/20 dark:to-gray-900/20 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex px-4 py-2 bg-primary/10 dark:bg-dark-primary/10 rounded-full mb-6 border border-primary/20 dark:border-dark-primary/20">
            <span className="text-primary dark:text-dark-primary font-medium">
              The Difference
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-6">
            From <span className="text-gray-500 dark:text-gray-400">Chaos</span> to <span className="text-primary dark:text-dark-primary">Clarity</span>
          </h2>
          <p className="text-gray-700 dark:text-dark-text-secondary">
            See how TripTrack transforms the group travel experience
          </p>
        </motion.div>

        {/* Comparison slider */}
        <div className="max-w-5xl mx-auto">
          {/* Tab selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
              {comparisons.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${activeTab === item.id 
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-primary dark:text-dark-primary' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Comparison content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 ${activeTab === 'manual' ? 'border-red-200 dark:border-red-900/50' : 'border-gray-100 dark:border-gray-700'} shadow-xs`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${activeTab === 'manual' ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                  {comparisons[0].icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary">
                  {comparisons[0].title}
                </h3>
              </div>
              <ul className="space-y-4">
                {comparisons[0].painPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                        <FaTimes className="text-red-600 dark:text-red-400 text-xs" />
                      </div>
                    </div>
                    <span className="text-gray-700 dark:text-dark-text-secondary">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Arrow separator */}
            <div className="hidden md:flex items-center justify-center">
              <motion.div
                animate={{ 
                  x: [-10, 10, -10],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className="p-4 rounded-full bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary"
              >
                <FaArrowRight className="text-2xl" />
              </motion.div>
            </div>

            {/* After column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 ${activeTab === 'triptrack' ? 'border-primary/50 dark:border-dark-primary/50' : 'border-gray-100 dark:border-gray-700'} shadow-xs`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${activeTab === 'triptrack' ? 'bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                  {comparisons[1].icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary">
                  {comparisons[1].title}
                </h3>
              </div>
              <ul className="space-y-4">
                {comparisons[1].benefits.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                        <FaCheck className="text-green-600 dark:text-green-400 text-xs" />
                      </div>
                    </div>
                    <span className="text-gray-700 dark:text-dark-text-secondary">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Stats comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                value: "72% → 12%",
                label: "Groups with money conflicts",
                change: "↓ 83% reduction"
              },
              {
                value: "3.2h → 0.5h",
                label: "Weekly admin time",
                change: "↓ 84% time saved"
              },
              {
                value: "61% → 89%",
                label: "Trip satisfaction",
                change: "↑ 46% improvement"
              }
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold font-heading text-primary dark:text-dark-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 dark:text-dark-text-secondary mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseComparison;