import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaRocket, FaUsers } from 'react-icons/fa';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1 }
  }
};

const OurStorySection = () => {
  return (
    <section className="relative py-20 bg-background dark:bg-dark-background overflow-hidden">
      {/* Background elements - enhanced for light mode */}
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/dot-pattern.svg')] opacity-10 dark:opacity-[0.02]" />
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
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/20 dark:bg-dark-primary/10 rounded-full blur-[100px]"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div variants={item} className="flex justify-center mb-6">
            <div className="px-4 py-2 bg-primary/20 dark:bg-dark-primary/10 rounded-full inline-flex items-center gap-2 border border-primary/30 dark:border-dark-primary/20">
              <FaLeaf className="text-primary dark:text-dark-primary" />
              <span className="text-primary dark:text-dark-primary font-medium font-heading">
                Our Journey
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={item}
            className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-6"
          >
            From Idea to <span className="text-primary dark:text-dark-primary">Global Solution</span>
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-lg text-gray-700 dark:text-dark-text-secondary max-w-3xl mx-auto"
          >
            How a simple frustration during a group trip led us to create TripTrack
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - enhanced contrast */}
          <div className="absolute left-1/2 h-full w-0.5 bg-primary/30 dark:bg-dark-primary/20 -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {/* Item 1 */}
            <div className="relative flex items-center justify-between gap-8">
              <motion.div 
                variants={fadeIn}
                className="hidden md:block md:w-1/2"
              >
                <div className="p-1 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
                  <div className="bg-white dark:bg-dark-surface p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-2">
                      The Problem
                    </h3>
                    <p className="text-gray-700 dark:text-dark-text-secondary">
                      In 2022, our founders returned from a disastrous group trip where money arguments ruined the experience. We knew there had to be a better way.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <div className="w-12 h-12 rounded-full bg-primary dark:bg-dark-primary flex items-center justify-center shrink-0 mx-auto relative z-10 ring-4 ring-primary/20 dark:ring-dark-primary/20">
                <span className="text-white font-bold">1</span>
              </div>
              
              <motion.div 
                variants={fadeIn}
                className="md:hidden w-full"
              >
                <div className="p-1 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">
                  <div className="bg-white dark:bg-dark-surface p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-2">
                      The Problem
                    </h3>
                    <p className="text-gray-700 dark:text-dark-text-secondary">
                      In 2022, our founders returned from a disastrous group trip where money arguments ruined the experience. We knew there had to be a better way.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Item 2 */}
            <div className="relative flex items-center justify-between gap-8">
              <motion.div 
                variants={fadeIn}
                className="md:w-1/2 md:order-2"
              >
                <div className="p-1 bg-gradient-to-r from-secondary to-accent rounded-lg shadow-lg">
                  <div className="bg-white dark:bg-dark-surface p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-2">
                      The Breakthrough
                    </h3>
                    <p className="text-gray-700 dark:text-dark-text-secondary">
                      After months of research, we developed an AI algorithm that automatically suggests fair expense splits based on group dynamics and preferences.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 mx-auto relative z-10 order-1 md:order-none ring-4 ring-secondary/20">
                <FaRocket className="text-white" />
              </div>
              
              <div className="md:w-1/2 md:order-3"></div>
            </div>

            {/* Item 3 */}
            <div className="relative flex items-center justify-between gap-8">
              <motion.div 
                variants={fadeIn}
                className="hidden md:block md:w-1/2"
              >
                <div className="p-1 bg-gradient-to-r from-accent to-primary rounded-lg shadow-lg">
                  <div className="bg-white dark:bg-dark-surface p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-2">
                      Today
                    </h3>
                    <p className="text-gray-700 dark:text-dark-text-secondary">
                      TripTrack now helps thousands of travelers enjoy stress-free adventures. Our mission remains: eliminate money arguments from group travel.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0 mx-auto relative z-10 ring-4 ring-accent/20">
                <FaUsers className="text-white" />
              </div>
              
              <motion.div 
                variants={fadeIn}
                className="md:hidden w-full"
              >
                <div className="p-1 bg-gradient-to-r from-accent to-primary rounded-lg shadow-lg">
                  <div className="bg-white dark:bg-dark-surface p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-2">
                      Today
                    </h3>
                    <p className="text-gray-700 dark:text-dark-text-secondary">
                      TripTrack now helps thousands of travelers enjoy stress-free adventures. Our mission remains: eliminate money arguments from group travel.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats - enhanced contrast */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-24"
        >
          <motion.div 
            variants={item}
            className="bg-white dark:bg-dark-surface p-8 rounded-xl shadow border border-gray-200 dark:border-gray-700 text-center"
          >
            <div className="text-5xl font-bold font-heading text-primary dark:text-dark-primary mb-2">
              10K+
            </div>
            <div className="text-gray-700 dark:text-dark-text-secondary font-medium">
              Happy Travelers
            </div>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="bg-white dark:bg-dark-surface p-8 rounded-xl shadow border border-gray-200 dark:border-gray-700 text-center"
          >
            <div className="text-5xl font-bold font-heading text-secondary mb-2">
              50+
            </div>
            <div className="text-gray-700 dark:text-dark-text-secondary font-medium">
              Countries Reached
            </div>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="bg-white dark:bg-dark-surface p-8 rounded-xl shadow border border-gray-200 dark:border-gray-700 text-center"
          >
            <div className="text-5xl font-bold font-heading text-accent mb-2">
              95%
            </div>
            <div className="text-gray-700 dark:text-dark-text-secondary font-medium">
              Less Arguments Reported
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;