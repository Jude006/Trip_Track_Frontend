import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const ConversionCTA = () => {
  return (
    <section className="relative py-24 bg-background dark:bg-dark-background overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/10 dark:bg-dark-primary/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Core CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 dark:bg-dark-primary/10 rounded-full mb-8 border border-primary/20 dark:border-dark-primary/20"
          >
            <FaCheckCircle className="text-primary dark:text-dark-primary" />
            <span className="text-primary dark:text-dark-primary font-medium">
              Ready to Get Started?
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-6">
            Transform Your{" "}
            <span className="text-primary dark:text-dark-primary">
              Group Travels
            </span>{" "}
            Today
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 dark:text-dark-text-secondary mb-10 max-w-2xl mx-auto"
          >
            Join thousands of travelers enjoying stress-free adventures with
            TripTrack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/auth/signup">
              {" "}
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 text-white rounded-full font-medium flex items-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl group">
                Create Free Account
                <span className="group-hover:translate-x-1 transition-transform">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
            <Link to="/">
              <button className="px-8 py-3 bg-white dark:bg-dark-surface border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-dark-primary text-gray-900 dark:text-dark-text-primary rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow-md">
                See Pricing Plans
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Create Account",
                description: "30-second signup with Google or email",
                icon: "🚀",
              },
              {
                title: "2. Start a Trip",
                description: "Add friends and set your budget",
                icon: "✈️",
              },
              {
                title: "3. Travel Stress-Free",
                description: "Let TripTrack handle the finances",
                icon: "😌",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-xs text-center"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-dark-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <Link to="/dashboard/faq">
              <button className="inline-flex items-center gap-2 text-primary dark:text-dark-primary font-medium">
                Explore FAQs
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaChevronDown />
                </motion.span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionCTA;
