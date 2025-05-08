import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Newsletter = () => {
  return (
    <section className="py-16 md:py-24 bg-primary dark:bg-dark-primary text-white">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold font-heading mb-4"
        >
          Stay Updated with TripTrack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 opacity-90"
        >
          Subscribe to our newsletter for travel tips, product updates, and special offers.
        </motion.p>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:ring-2 focus:ring-white focus:border-transparent placeholder-white/70"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-primary dark:text-dark-primary rounded-lg font-medium shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            Subscribe
          </button>
        </motion.form>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center gap-4"
        >
          <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200">
            <FaLinkedin className="text-xl" />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Newsletter;