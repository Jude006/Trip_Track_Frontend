import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRoute, FaMoneyBillWave, FaHandshake, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <FaRoute className="text-3xl" />,
      title: "Create Your Trip",
      description: "Set destinations, dates, and budget in seconds",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FaMoneyBillWave className="text-3xl" />,
      title: "Create Expenses",
      description: "Add costs and ask AI to calculate total expenses",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Settle Up",
      description: "Get crystal-clear 'who owes who' calculations",
      color: "bg-green-100 text-green-600"
    }
  ];

  const nextStep = () => {
    setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-dark-background dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4 font-heading text-text-primary dark:text-dark-text-primary"
        >
          How <span className="text-primary dark:text-primary">TripTrack</span> Works
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:text-[16px] text-sm text-center text-text-secondary dark:text-dark-text-secondary  mb-12 max-w-2xl mx-auto"
        >
          From planning to payment, we've automated the stressful parts of group travel
        </motion.p>

        {/* Desktop Timeline (hidden on mobile) */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 h-1 w-2/3 bg-gray-200 dark:bg-gray-700 top-8 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: `${(activeStep + 1) * 33.33}%` }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
                onMouseEnter={() => setActiveStep(index)}
              >
                <button 
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all ${activeStep === index ? 'scale-110 ' + step.color : 'bg-gray-100 dark:bg-gray-800'}`}
                >
                  {step.icon}
                </button>
                <h3 className={`text-lg font-semibold font-san mb-2 ${activeStep === index ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                  {step.title}
                </h3>
                <p className={`text-sm ${activeStep === index ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'}`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${steps[activeStep].color}`}>
                {steps[activeStep].icon}
              </div>
              <h3 className="text-lg font-semibold font-san mb-2 text-gray-900 dark:text-white">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {steps[activeStep].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 gap-4">
            <button 
              onClick={prevStep}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <FaChevronLeft className="text-gray-600 dark:text-gray-300" />
            </button>
            <div className="flex items-center gap-1">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-2 h-2 rounded-full ${activeStep === index ? 'bg-primary w-4' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button 
              onClick={nextStep}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <FaChevronRight className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-12 p-6 md:p-8 rounded  ${steps[activeStep].color.replace('bg-', 'bg-opacity-20 ')} border border-gray-200 dark:border-gray-700`}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">{steps[activeStep].title} →</h3>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-700 dark:text-gray-300 mb-4"
                >
                  {activeStep === 0 && "Create your trip, invite friends, and set spending limits before you even pack your bags."}
                  {activeStep === 1 && "Snap photos of receipts or add expenses manually. TripTrack automatically categorizes and logs everything."}
                  {activeStep === 2 && "Our algorithm calculates exact debts. Send payment reminders with one tap—no awkward conversations needed."}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="flex-1 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded  border border-gray-100 dark:border-gray-700"
                >
                  {activeStep === 0 && (
                    <img 
                      src="/images/create.PNG" 
                      alt="Trip creation interface"
                      className="rounded-lg max-h-[30vh] w-full object-contain"
                    />
                  )}
                  {activeStep === 1 && (
                    <img 
                      src="/images/ai.PNG" 
                      alt="Expense tracking interface"
                      className="rounded-lg max-h-[30vh] w-full object-contain"
                    />
                  )}
                  {activeStep === 2 && (
                    <img 
                      src="/settlement-demo.png" 
                      alt="Settlement interface"
                      className="rounded-lg max-h-[30vh] w-full object-contain"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;