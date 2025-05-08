import React from 'react';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaHandshake, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProblemSolutionSection = () => {
  return (
    <section className="relative py-24 bg-background dark:bg-dark-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.02]" />
        <motion.div 
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 dark:bg-dark-primary/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-dark-primary/10 rounded-full mb-6"
          >
            <FaMoneyBillWave className="text-primary dark:text-dark-primary" />
            <span className="text-primary dark:text-dark-primary font-medium font-heading">
              Travel Finance Solved
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-6"
          >
            The <span className="text-primary dark:text-dark-primary">Problem</span> & Our <span className="text-secondary dark:text-secondary">Solution</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-dark-text-secondary max-w-2xl mx-auto"
          >
            Group travel should create memories, not financial stress. Here's how we're changing the game.
          </motion.p>
        </div>

        {/* Problem-Solution cards */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problem card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-red-500/10 to-red-600/10 dark:from-red-900/10 dark:to-red-800/10 rounded-2xl blur-sm"></div>
            <div className="relative bg-white dark:bg-dark-surface p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                  <FaMoneyBillWave className="text-red-500 dark:text-red-400 text-xl" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-dark-text-primary">
                  The Problem
                </h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "72% of travelers report money conflicts during group trips",
                  "Endless spreadsheets and awkward 'who owes what' conversations",
                  "Uneven spending creates tension among friends",
                  "Last-minute budget surprises ruin the experience"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-500 dark:bg-red-400"></div>
                    </div>
                    <span className="text-gray-700 dark:text-dark-text-secondary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solution card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-secondary/10 to-primary/10 dark:from-secondary/20 dark:to-primary/20 rounded-2xl blur-sm"></div>
            <div className="relative bg-white dark:bg-dark-surface p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                  <FaHandshake className="text-secondary dark:text-secondary text-xl" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-dark-text-primary">
                  Our Solution
                </h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "AI-powered expense tracking that works in real-time",
                  "Automated fair-split algorithms customized for your group",
                  "Visual budget dashboards everyone can understand",
                  "Payment integration to settle up instantly"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-secondary dark:bg-secondary"></div>
                    </div>
                    <span className="text-gray-700 dark:text-dark-text-secondary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Results section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-10 border border-gray-200 dark:border-gray-800"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-6">
              <FaChartLine className="text-accent dark:text-accent text-2xl" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-4">
              The TripTrack Difference
            </h3>
            <p className="text-gray-700 dark:text-dark-text-secondary max-w-3xl mx-auto mb-8">
              Groups using TripTrack report 83% fewer money arguments and 65% more trips planned together.
            </p>
           <Link to='/dashboard/ai-assistant'>
           <div className="inline-flex px-6 py-3 bg-accent hover:bg-accent/90 dark:bg-accent dark:hover:bg-accent/90 text-white rounded-full font-medium transition-colors">
              See How It Works
            </div>
           </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;