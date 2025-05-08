import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaEdit,FaPhone } from 'react-icons/fa';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact-form" className="py-20 bg-white dark:bg-dark-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
              Have questions about trip planning or need support? Fill out the form below.
            </p>
          </div>

          <form className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent bg-white dark:bg-dark-background text-gray-900 dark:text-dark-text-primary"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent bg-white dark:bg-dark-background text-gray-900 dark:text-dark-text-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Subject
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                  <FaEdit />
                </div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent bg-white dark:bg-dark-background text-gray-900 dark:text-dark-text-primary"
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent bg-white dark:bg-dark-background text-gray-900 dark:text-dark-text-primary"
                placeholder="Tell us about your trip planning needs..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full md:w-auto px-8 py-3.5 bg-primary hover:bg-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 text-white rounded-lg font-medium text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message
            </motion.button>
          </form>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-medium text-gray-700 dark:text-dark-text-secondary mb-4">
              Prefer other ways to reach us?
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center text-primary dark:text-dark-primary">
                  <FaEnvelope />
                </div>
                <span className="text-gray-600 dark:text-dark-text-secondary">support@triptrack.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center text-primary dark:text-dark-primary">
                  <FaPhone />
                </div>
                <span className="text-gray-600 dark:text-dark-text-secondary">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;