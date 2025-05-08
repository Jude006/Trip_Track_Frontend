import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSyncAlt, FaPlay, FaPause, FaExpand, FaCompress } from 'react-icons/fa';

const SandboxDemo = () => {
  const [activeModule, setActiveModule] = useState('expenses');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [userAction, setUserAction] = useState(null);

  const modules = {
    expenses: {
      title: "Expense Tracking",
      description: "Try adding sample expenses to see automatic categorization",
      video: "/demos/expenses.mp4",
      interactions: [
        { label: "Add dinner", action: "add-expense", amount: "$85.50" },
        { label: "Add activity", action: "add-expense", amount: "$120.00" }
      ]
    },
    splits: {
      title: "AI Splits",
      description: "Adjust how costs are divided among group members",
      video: "/demos/splits.mp4",
      interactions: [
        { label: "Equal split", action: "split-equally" },
        { label: "Customize", action: "adjust-splits" }
      ]
    },
    payments: {
      title: "Settlements",
      description: "Test the frictionless payment flow",
      video: "/demos/payments.mp4",
      interactions: [
        { label: "Send reminder", action: "remind" },
        { label: "Pay now", action: "pay-now" }
      ]
    }
  };

  useEffect(() => {
    let interval;
    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 2, 100));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  const resetDemo = () => {
    setIsPlaying(false);
    setProgress(0);
    setUserAction(null);
  };

  const handleInteraction = (action) => {
    setUserAction(action);
    setIsPlaying(true);
    if (progress > 80) setProgress(0);
  };

  return (
    <section className={`relative overflow-hidden ${isFullscreen ? 'fixed  inset-0 z-50 bg-white dark:bg-dark-background' : 'py-24 bg-gray-50 dark:bg-gray-900'}`}>
      {!isFullscreen && (
        <motion.div 
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 15,
            repeat: Infinity
          }}
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"
        />
      )}

      <div className={`container mx-auto ${isFullscreen ? 'h-full' : 'px-6'}`}>
        <div className={`flex flex-col ${isFullscreen ? 'pt-6 px-6' : 'mb-12'}`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-dark-text-primary">
                Interactive Sandbox
              </h2>
              <p className="text-gray-700 dark:text-dark-text-secondary">
                {modules[activeModule].description}
              </p>
            </div>
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </motion.div>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-1 bg-primary dark:bg-dark-primary mt-4"
          />
        </div>

        <div className={`flex flex-col lg:flex-row ${isFullscreen ? 'h-[calc(100%-100px)]' : 'gap-8'}`}>
          <div className={`relative flex-1 ${isFullscreen ? 'h-full' : 'rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative h-full "
              >
                <video
                  src={modules[activeModule].video}
                  autoPlay={isPlaying}
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />

                {userAction && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/90 dark:bg-dark-primary/90 text-white px-6 py-3 rounded-full shadow-lg"
                  >
                    {userAction} triggered
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button 
                onClick={resetDemo}
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2"
              >
                <FaSyncAlt /> Reset
              </button>
            </div>
          </div>

          {!isFullscreen && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:w-80 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xs"
            >
              <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-6">
                Try It Yourself
              </h3>
              
              <div className="space-y-4 mb-8">
                {Object.keys(modules).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveModule(key)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeModule === key 
                      ? 'bg-primary/10 dark:bg-dark-primary/10 border border-primary/20 dark:border-dark-primary/20' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    <div className="font-medium text-gray-900 dark:text-dark-text-primary">
                      {modules[key].title}
                    </div>
                    <div className="text-sm text-gray-700 dark:text-dark-text-secondary">
                      {modules[key].description}
                    </div>
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Available Actions:</h4>
                {modules[activeModule].interactions.map((item, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInteraction(item.action)}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex justify-between items-center"
                  >
                    <span className="text-gray-900 dark:text-dark-text-primary">{item.label}</span>
                    {item.amount && (
                      <span className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        {item.amount}
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {!isFullscreen && (
        <>
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
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 dark:bg-dark-primary/10 rounded-full blur-[80px] -z-10"
          />
          <motion.div
            animate={{
              x: [0, -15, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 5
            }}
            className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/10 dark:bg-secondary/10 rounded-full blur-[80px] -z-10"
          />
        </>
      )}
    </section>
  );
};

export default SandboxDemo;