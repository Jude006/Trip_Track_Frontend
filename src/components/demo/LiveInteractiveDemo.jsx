import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSyncAlt, FaDesktop, FaMobileAlt, FaUsers, FaCoins, FaUtensils, FaPlane } from 'react-icons/fa';

const LiveInteractiveDemo = () => {
  const [activeScenario, setActiveScenario] = useState('friends');
  const [deviceView, setDeviceView] = useState('desktop');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scenarios = {
    friends: {
      title: "Friends Weekend Trip",
      description: "Split costs fairly among 4 friends with different budgets",
      icon: <FaUsers className="text-primary dark:text-dark-primary" />,
      stats: ["$1,200 total budget", "3 days", "4 people"],
      video: "/demos/friends-desktop.mp4",
      mobileVideo: "/demos/friends-mobile.mp4"
    },
    family: {
      title: "Family Vacation",
      description: "Manage expenses across generations with shared responsibilities",
      icon: <FaCoins className="text-secondary dark:text-secondary" />,
      stats: ["$3,500 total budget", "7 days", "5 people"],
      video: "/demos/family-desktop.mp4",
      mobileVideo: "/demos/family-mobile.mp4"
    },
    business: {
      title: "Business Conference",
      description: "Track reimbursable expenses with corporate policies",
      icon: <FaPlane className="text-accent dark:text-accent" />,
      stats: ["$2,800 total budget", "4 days", "3 colleagues"],
      video: "/demos/business-desktop.mp4",
      mobileVideo: "/demos/business-mobile.mp4"
    }
  };

  const handleScenarioChange = (scenario) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveScenario(scenario);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Decorative gradient elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          animate={{
            x: [0, 15, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 dark:bg-dark-primary/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{
            x: [0, -15, 0],
            y: [0, 20, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 5
          }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/10 dark:bg-secondary/10 rounded-full blur-[100px]"
        />
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
              Live Interactive Demo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-6">
            Experience <span className="text-primary dark:text-dark-primary">Real</span> Trip Scenarios
          </h2>
          <p className="text-lg text-gray-700 dark:text-dark-text-secondary max-w-3xl mx-auto">
            Interact with our demo using realistic travel situations - no login required
          </p>
        </motion.div>

        {/* Scenario selector */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(scenarios).map(([key, scenario]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScenarioChange(key)}
              className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${activeScenario === key 
                ? 'bg-primary dark:bg-dark-primary text-white' 
                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-dark-text-primary hover:border-primary dark:hover:border-dark-primary'}`}
            >
              <div className="text-lg">
                {scenario.icon}
              </div>
              <span className="font-medium">{scenario.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Interactive demo container */}
        <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow border border-gray-200 dark:border-gray-700">
          {/* Demo header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setDeviceView('desktop')}
                className={`p-2 rounded-lg ${deviceView === 'desktop' ? 'bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary' : 'text-gray-500 dark:text-gray-400'}`}
              >
                <FaDesktop className="text-xl" />
              </button>
              <button 
                onClick={() => setDeviceView('mobile')}
                className={`p-2 rounded-lg ${deviceView === 'mobile' ? 'bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary' : 'text-gray-500 dark:text-gray-400'}`}
              >
                <FaMobileAlt className="text-xl" />
              </button>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-dark-primary/10 rounded-full text-primary dark:text-dark-primary">
              <FaSyncAlt />
              <span>Reset Demo</span>
            </button>
          </div>

          {/* Demo content */}
          <div className="relative h-[500px] md:h-[600px]">
            <AnimatePresence mode="wait">
              {!isTransitioning && (
                <motion.div
                  key={`${activeScenario}-${deviceView}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {deviceView === 'desktop' ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      src={scenarios[activeScenario].video}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="relative w-[280px] h-[560px] border-[12px] border-gray-900 rounded-[40px] overflow-hidden">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                          src={scenarios[activeScenario].mobileVideo}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Demo footer */}
          <div className="p-6 border-t border-gray-100 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-2">
                  {scenarios[activeScenario].title}
                </h3>
                <p className="text-gray-700 dark:text-dark-text-secondary">
                  {scenarios[activeScenario].description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {scenarios[activeScenario].stats.map((stat, i) => (
                  <div key={i} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-900 dark:text-dark-text-primary font-medium">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive hotspots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <FaUtensils className="text-2xl text-primary dark:text-dark-primary" />,
              title: "Try adding an expense",
              instruction: "Click on any + button in the demo"
            },
            {
              icon: <FaUsers className="text-2xl text-secondary dark:text-secondary" />,
              title: "Adjust a split",
              instruction: "Drag allocation percentages"
            },
            {
              icon: <FaCoins className="text-2xl text-accent dark:text-accent" />,
              title: "Settle up",
              instruction: "Test the payment flow"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/5 dark:bg-dark-primary/10">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-dark-text-primary">{item.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-dark-text-secondary">{item.instruction}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LiveInteractiveDemo;