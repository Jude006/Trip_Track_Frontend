import React from 'react';
import { motion } from 'framer-motion';
import { FaRoute, FaHandHoldingUsd, FaUsers } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';

const BlurText = ({ text, delay = 0.05, className }) => {
  const letters = text.split('');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delay, delayChildren: i * delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 20
    }
  };

  return (
    <motion.div 
      className={`flex ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, i) => (
        <motion.span 
          key={i}
          variants={child}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const AboutLandingPage = () => {
  return (
    <section className="relative md:h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-gray-100 dark:from-dark-background dark:to-gray-800">
      {/* Enhanced Background Elements */}
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/travel-pattern.svg')] opacity-[0.03] dark:opacity-[0.02]" />
        <motion.div 
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute top-1/4 left-1/4 w-60 h-60 bg-primary/20 dark:bg-dark-primary/20 rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{
            x: [0, -15, 0],
            y: [0, 20, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/20 dark:bg-secondary/20 rounded-full blur-[100px]"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Animated Icons */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-6 mb-10"
        >
          {[
            { icon: <FaRoute className="text-3xl" />, color: 'primary', title: 'Smart Routing' },
            { icon: <FaHandHoldingUsd className="text-3xl" />, color: 'secondary', title: 'Fair Splits' },
            { icon: <FaUsers className="text-3xl" />, color: 'accent', title: 'Group Focused' }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-5 bg-surface dark:bg-dark-surface rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 ${i === 1 ? '-translate-y-5' : ''}`}
            >
              <div className={`text-${item.color} dark:text-${item.color}`}>
                {item.icon}
                <p className="mt-2 text-sm font-medium text-text-primary dark:text-dark-text-primary">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Blur Animated Headline */}
        <div className="mb-8">
          <BlurText 
            text="Your Journey, Simplified"
            delay={0.03}
            className="text-3xl md:text-5xl font-bold font-heading justify-center text-text-primary dark:text-dark-text-primary"
          />
          <BlurText 
            text="TripTrack"
            delay={0.03}
            className="text-3xl md:text-5xl font-bold font-heading justify-center text-primary dark:text-dark-primary mt-2"
          />
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg md:text-xl text-text-secondary dark:text-dark-text-secondary mb-12 max-w-3xl mx-auto"
        >
          Travel with friends, not financial stress. Our AI-powered budgeting keeps group trips fair and fun.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="px-8 py-3 bg-primary hover:bg-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 text-white rounded-full font-medium shadow-lg transition-colors"
        >
          Start Your Adventure
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <FiArrowDown className="text-2xl text-text-primary dark:text-dark-text-primary animate-bounce" />
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50
          }}
          animate={{
            opacity: [0, 0.4, 0],
            y: Math.random() * 100 - 50
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 3
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`
          }}
          className={`absolute rounded-full ${
            i % 3 === 0 ? 'bg-primary/30 dark:bg-dark-primary/30' : 
            i % 3 === 1 ? 'bg-secondary/30 dark:bg-secondary/30' : 'bg-accent/30 dark:bg-accent/30'
          }`}
        />
      ))}
    </section>
  );
};

export default AboutLandingPage;