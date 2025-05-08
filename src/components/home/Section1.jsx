import React from 'react';
import { motion } from 'framer-motion';
import { FaCompass, FaUsers, FaPeace } from 'react-icons/fa';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const Section1 = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="py-16 px-5 md:px-20 bg-white dark:bg-dark-surface"
    >
      <div className="max-w-6xl mx-auto">
        {/* Intro Text */}
        <motion.div variants={item} className="text-center mb-16">
          <motion.h2 
            variants={item}
            className="text-3xl md:text-4xl font-bold font-heading text-text-primary dark:text-dark-text-primary mb-4"
          >
            Travel Together, <span className="text-primary">Split Smartly</span>
          </motion.h2>
          <motion.p 
            variants={item}
            className="md:text-[16px] text-sm text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto"
          >
            TripTrack eliminates the hassle of group travel finances with automatic expense splitting, 
            real-time budget tracking, and AI-powered insights—so you can focus on making memories.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <FaCompass className="text-2xl text-primary" />,
              title: "Plan with Confidence",
              text: "Set budgets, track spending, and avoid surprises"
            },
            {
              icon: <FaUsers className="text-2xl text-accent" />,
              title: "Split Fairly",
              text: "Automatically calculate who owes what—no spreadsheets needed"
            },
            {
              icon: <FaPeace className="text-2xl text-secondary" />,
              title: "Travel Stress-Free",
              text: "Our AI handles the math so you can enjoy the journey"
            }
          ].map((pillar, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-background dark:bg-dark-background p-8 rounded-xl shadow-sm "
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-4 rounded-full bg-primary/10">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-text-primary dark:text-dark-text-primary">{pillar.title}</h3>
                <p className="text-text-secondary dark:text-dark-text-secondary">
                  {pillar.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section1;