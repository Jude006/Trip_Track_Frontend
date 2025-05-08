import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUserFriends, FaMoneyBillWave, FaRegSmile } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EffectivenessProof = () => {
  const [activeTab, setActiveTab] = useState('savings');

  const metrics = {
    savings: {
      icon: <FaMoneyBillWave className="text-3xl text-green-500" />,
      before: "$3.8h",
      after: "0.6h",
      label: "Weekly finance admin time",
      change: "84% time saved",
      description: "Groups spend less than 1 hour/week managing trip finances"
    },
    satisfaction: {
      icon: <FaRegSmile className="text-3xl text-blue-500" />,
      before: "61%",
      after: "89%",
      label: "Trip satisfaction rate",
      change: "46% improvement",
      description: "Nearly 9 in 10 groups report perfect financial harmony"
    },
    retention: {
      icon: <FaUserFriends className="text-3xl text-purple-500" />,
      before: "1.2x",
      after: "2.8x",
      label: "Repeat trips together",
      change: "133% increase",
      description: "Groups that use TripTrack plan more future trips together"
    }
  };

  return (
    <section className="relative py-24 bg-white dark:bg-dark-background overflow-hidden">
      {/* Dynamic gradient mesh background */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-15">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-mesh.svg')] bg-cover" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex px-5 py-2.5 bg-primary/10 dark:bg-dark-primary/10 rounded-full mb-6 border border-primary/20 dark:border-dark-primary/20">
            <span className="text-primary dark:text-dark-primary font-medium">
              Proven Results
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-6">
            From <span className="line-through text-gray-400 dark:text-gray-500">Stress</span> to <span className="text-primary dark:text-dark-primary">Success</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-dark-text-secondary max-w-2xl mx-auto">
            Real data from thousands of trips shows the TripTrack difference
          </p>
        </motion.div>

        {/* Interactive metric selector */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 shadow-inner">
            {Object.keys(metrics).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${activeTab === key 
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-dark-text-primary' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
              >
                {metrics[key].icon}
                <span className="capitalize font-medium">{key}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Animated comparison */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Before */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border-2 border-red-100 dark:border-red-900/50 text-center"
            >
              <div className="text-5xl font-bold text-gray-400 dark:text-gray-500 mb-4">
                {metrics[activeTab].before}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Before TripTrack
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-red-400 to-red-100 rounded-full mb-6" />
              <p className="text-gray-700 dark:text-dark-text-secondary">
                Average group experience
              </p>
            </motion.div>

            {/* Improvement arrow */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'mirror'
                }}
                className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-lg border border-gray-200 dark:border-gray-600"
              >
                <FaChartLine className="text-3xl text-primary dark:text-dark-primary" />
              </motion.div>
              <div className="mt-4 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-400 font-medium">
                {metrics[activeTab].change}
              </div>
            </div>

            {/* After */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border-2 border-green-100 dark:border-green-900/50 text-center"
            >
              <div className="text-5xl font-bold text-primary dark:text-dark-primary mb-4">
                {metrics[activeTab].after}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                With TripTrack
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-100 rounded-full mb-6" />
              <p className="text-gray-700 dark:text-dark-text-secondary">
                {metrics[activeTab].description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Never argued about money once during our 2-week trip",
                author: "Sarah K., Group Traveler",
                stats: "8 people • Europe trip"
              },
              {
                quote: "Saved us at least 10 hours of spreadsheet work",
                author: "Michael T., Family Organizer",
                stats: "5 family members"
              },
              {
                quote: "Actually made splitting costs fun somehow?",
                author: "David & Emma, Couple Travelers",
                stats: "4 countries visited"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xs"
              >
                <div className="md:text-lg text-sm text-gray-900 dark:text-dark-text-primary mb-4">
                  "{testimonial.quote}"
                </div>
                <div className="font-medium text-gray-900 dark:text-dark-text-primary">
                  {testimonial.author}
                </div>  
                <div className="text-sm text-gray-600 dark:text-dark-text-secondary">
                  {testimonial.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
            <Link to='/dashboard/my-trips'>
            <button className="px-10 py-3 bg-primary hover:bg-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 text-white rounded-full font-bold md:text-lg text-sm shadow transition-all">
            Start Your First Trip - It's Free
          </button>
            </Link>
          <p className="text-gray-600 dark:text-dark-text-secondary mt-6">
            No credit card required • 30-second setup
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EffectivenessProof;