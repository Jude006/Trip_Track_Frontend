import React from 'react';
import { motion } from 'framer-motion';
import { FaMagic, FaRobot, FaUsers, FaChartLine } from 'react-icons/fa';

const DifferentiatorSection = () => {
  const features = [
    {
      icon: <FaRobot className="text-3xl text-primary dark:text-dark-primary" />,
      title: "AI-Powered Splits",
      description: "Our algorithm learns spending patterns to suggest fair divisions automatically",
      highlight: "No more spreadsheets"
    },
    {
      icon: <FaUsers className="text-3xl text-secondary dark:text-secondary" />,
      title: "Group-First Design",
      description: "Built specifically for group dynamics with customizable rules for every trip",
      highlight: "Works how friends actually travel"
    },
    {
      icon: <FaChartLine className="text-3xl text-accent dark:text-accent" />,
      title: "Real-Time Tracking",
      description: "See expenses update live with predictive budgeting that prevents surprises",
      highlight: "Always know where you stand"
    },
    {
      icon: <FaMagic className="text-3xl text-primary dark:text-dark-primary" />,
      title: "Frictionless Settlements",
      description: "One-click payments with automatic reminders for outstanding balances",
      highlight: "No awkward money talks"
    }
  ];

  return (
    <section className="relative py-24 bg-background dark:bg-dark-background overflow-hidden">
      {/* Floating gradient elements */}
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
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 dark:bg-dark-primary/10 rounded-full blur-[100px]"
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
        className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/10 dark:bg-secondary/10 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-dark-primary/10 rounded-full mb-6 border border-primary/20 dark:border-dark-primary/20"
          >
            <span className="text-primary dark:text-dark-primary font-medium font-heading">
              Why We're Different
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-6"
          >
            Not Just Another <span className="text-primary dark:text-dark-primary">Budget App</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-dark-text-secondary max-w-2xl mx-auto"
          >
            We solve the real problems groups face when traveling together
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              {/* Animated border */}
              <motion.div 
                className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
              />
              
              {/* Feature card */}
              <div className="relative bg-white dark:bg-dark-surface p-8 rounded-2xl h-full border-2 border-gray-100 dark:border-gray-800 group-hover:border-primary/50 dark:group-hover:border-dark-primary/50 transition-all duration-300">
                <div className="flex flex-col h-full">
                  {/* Icon with subtle background */}
                  <div className="w-16 h-16 rounded-xl bg-primary/5 dark:bg-dark-primary/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-dark-text-secondary mb-4 flex-grow">
                    {feature.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    <span className="inline-block px-3 py-1 bg-primary/5 dark:bg-dark-primary/10 text-primary dark:text-dark-primary rounded-full text-sm font-medium">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-32 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full my-20"
        />

        {/* Comparison section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold font-heading text-center text-gray-900 dark:text-dark-text-primary mb-10">
            The <span className="text-primary dark:text-dark-primary">TripTrack</span> Difference
          </h3>
          
          <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-xs border-2 border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-gray-800">
              <div className="p-6 text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Traditional Apps</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-dark-text-primary">37%</div>
                <div className="text-sm text-gray-700 dark:text-dark-text-secondary">Groups complete trips without money issues</div>
              </div>
              <div className="p-6 text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Basic Splitters</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-dark-text-primary">62%</div>
                <div className="text-sm text-gray-700 dark:text-dark-text-secondary">Groups complete trips without money issues</div>
              </div>
              <div className="p-6 text-center bg-primary/5 dark:bg-dark-primary/10">
                <div className="text-sm text-primary dark:text-dark-primary font-medium mb-2">TripTrack</div>
                <div className="text-3xl font-bold text-primary dark:text-dark-primary">91%</div>
                <div className="text-sm text-gray-700 dark:text-dark-text-secondary">Groups complete trips without money issues</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;