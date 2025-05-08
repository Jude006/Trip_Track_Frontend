import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

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
      className={`flex flex-wrap ${className}`}
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

const ContactBanner = () => {
  return (
    <section className="relative h-[90vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-background via-gray-50 to-gray-100 dark:from-dark-background dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, type: 'spring' }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 dark:bg-dark-primary/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-secondary/10 dark:bg-secondary/20 blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 rounded-full bg-accent/10 dark:bg-accent/20 blur-3xl animate-float-delay-2"></div>
      </motion.div>

      {/* Floating message icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4  left-1/5 text-primary dark:text-dark-primary/30 text-4xl"
      >
        <FaPaperPlane className="animate-float" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-1/4 right-1/4 text-secondary dark:text-secondary/30 text-3xl"
      >
        <FaPaperPlane className="animate-float-delay" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute top-1/3 right-1/3 text-accent dark:text-accent/30 text-5xl"
      >
        <FaPaperPlane className="animate-float-delay-2" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 dark:bg-dark-primary/10 rounded-full mb-6 md:mb-8"
          >
            <FaPaperPlane className="text-primary dark:text-dark-primary text-sm" />
            <span className="text-primary dark:text-dark-primary font-medium text-sm uppercase tracking-wider">
              Get in Touch
            </span>
          </motion.div>
          
          {/* Main headline with blur animation */}
          <div className="mb-6 md:mb-8">
            <BlurText 
              text="Let's Connect"
              delay={0.03}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-4 leading-tight"
            />
            <BlurText 
              text="About Your Next Adventure"
              delay={0.03}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold font-heading text-primary dark:text-dark-primary leading-tight"
            />
          </div>
          
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-700 dark:text-dark-text-secondary mb-8 md:mb-12 max-w-2xl mx-auto"
          >
            Our team is ready to help you plan your perfect trip. Reach out for questions, partnerships, or just to say hello!
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1, type: 'spring' }}
          >
            <a
              href="#contact-form"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactBanner;