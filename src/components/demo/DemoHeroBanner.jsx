import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaApple, FaGooglePlay } from 'react-icons/fa';
import PhoneMockup from './PhoneMockup';

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
      className={`flex flex-wrap ${className}`} // Added flex-wrap
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

const DemoHeroBanner = () => {
  return (
    <section className="relative h-auto min-h-screen py-20 md:py-0 md:h-screen bg-gradient-to-br from-background to-gray-50 dark:from-dark-background dark:to-gray-900 overflow-hidden">
      {/* Background elements (unchanged) */}
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        {/* ... (keep existing background elements) ... */}
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 h-full flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left content - responsive adjustments */}
          <div className="flex flex-col justify-center order-2 lg:order-1 mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-dark-primary/10 rounded-full mb-6 md:mb-8 w-fit mx-auto lg:mx-0"
            >
              <FaPlay className="text-primary dark:text-dark-primary text-sm md:text-base" />
              <span className="text-primary dark:text-dark-primary font-medium text-sm md:text-base">
                Interactive Demo
              </span>
            </motion.div>
            
            <div className="mb-6 md:mb-8 text-center lg:text-left">
              <BlurText 
                text="See TripTrack in Action"
                delay={0.03}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-2 md:mb-4 justify-center lg:justify-start"
              />
              <BlurText 
                text="Experience effortless "
                delay={0.03}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary dark:text-dark-primary justify-center lg:justify-start"
              />
              <BlurText 
                text="group budgeting"
                delay={0.03}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary dark:text-dark-primary justify-center lg:justify-start"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xs sm:text-sm text-gray-700 dark:text-dark-text-secondary mb-6 md:mb-10 max-w-xl mx-auto lg:mx-0 text-center lg:text-left px-4 sm:px-0"
            >
              Try our live demo with sample data or watch how TripTrack transforms group travel planning in minutes.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <button className="px-6 py-2 md:px-8 md:py-3 bg-primary hover:bg-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 text-white rounded-full font-medium flex items-center gap-2 md:gap-3 transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base">
                Launch Demo
                <FaPlay className="text-xs md:text-sm" />
              </button>
              <button className="px-6 py-2 md:px-8 md:py-3 bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-dark-primary text-gray-900 dark:text-dark-text-primary rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow-md text-sm md:text-base">
                Watch Video
              </button>
            </motion.div>

            {/* Mobile app badges - centered on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 md:gap-3 px-3 py-1 md:px-4 md:py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs md:text-sm">
                <FaApple className="text-lg md:text-2xl text-secondary" />
                <div className="text-left">
                  <div className="text-[10px] md:text-xs">Download on</div>
                  <div className="font-medium">App Store</div>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 px-3 py-1 md:px-4 md:py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs md:text-sm">
                <FaGooglePlay className="text-base md:text-xl text-error" />
                <div className="text-left">
                  <div className="text-[10px] md:text-xs">Get it on</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative order-1 lg:order-2 hidden md:block"
          >
            <PhoneMockup className="w-[280px] h-[560px] lg:w-[320px] lg:h-[640px] mx-auto">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-[36px]"
                src="/demo-screen-recording.mp4"
              />
            </PhoneMockup>
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              className="absolute -z-10 w-full h-full bg-primary/10 dark:bg-dark-primary/10 rounded-[50px] blur-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Floating particles (unchanged) */}
      {/* ... (keep existing particles code) ... */}
    </section>
  );
};

export default DemoHeroBanner;