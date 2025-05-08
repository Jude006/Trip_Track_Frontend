import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import GoogleAuthButton from '../common/button/GoogleAuthButton';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 dark:bg-[#1e293b]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-text-primary dark:text-dark-text-primary">
            Ready to Travel <span className="text-primary dark:text-dark-primary">Stress-Free</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers managing group expenses effortlessly
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/auth/signup" 
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
            >
              Get Started <FaArrowRight />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/auth/login" 
              className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg border border-gray-200 dark:border-gray-700"
            >
              I Have an Account
            </Link>
          </motion.div>
        </div>

        <div className="mt-8 max-w-md mx-auto">
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
            <span className="px-4 text-gray-500 dark:text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
          <GoogleAuthButton />
          
          </motion.div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
            By signing up, you agree to our <Link to="/terms" className="text-primary dark:text-dark-primary underline">Terms</Link> and <Link to="/terms" className="text-primary dark:text-dark-primary underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;