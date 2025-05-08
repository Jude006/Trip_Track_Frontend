import React from "react";
import { motion } from "framer-motion";
import {Helmet} from 'react-helmet'

const TermsAndPrivacy = () => {

  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>TripTrack - Terms & Privacy</title>
        <meta
          name="description"
          content="Terms of Service and Privacy Policy for TripTrack"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-dark-background text-text-primary dark:text-dark-text-primary">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl font-bold font-heading mb-4">
              TripTrack{" "}
              <span className="text-primary dark:text-dark-primary">Legal</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Last updated:{" "}
              {lastUpdated}
            </p>
          </motion.header>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
            <button className="px-4 py-2 font-medium border-b-2 border-primary dark:border-dark-primary text-primary dark:text-dark-primary">
              Terms of Service
            </button>
            <button className="px-4 py-2 font-medium text-gray-500 dark:text-gray-400">
              Privacy Policy
            </button>
          </div>

          {/* Terms of Service */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-dark-surface rounded-xl shadow-sm p-6 md:p-8 mb-12 border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>

            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mt-6 mb-3">
                1. Acceptance of Terms
              </h3>
              <p>
                By accessing or using TripTrack ("the Service"), you agree to be
                bound by these Terms. If you disagree, please refrain from using
                our Service.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                2. Service Description
              </h3>
              <p>
                TripTrack provides group travel budgeting tools including
                expense tracking, splitting functionality, and AI-powered
                recommendations.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                3. User Responsibilities
              </h3>
              <p>You agree to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Provide accurate trip and expense information</li>
                <li>Not use the Service for illegal purposes</li>
                <li>Maintain confidentiality of your account credentials</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">4. Payments</h3>
              <p>
                The core TripTrack service is currently free. We reserve the
                right to introduce premium features with separate pricing.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                5. Limitation of Liability
              </h3>
              <p>
                TripTrack is not responsible for financial disputes between
                group members. The Service provides tools but does not guarantee
                debt collection.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                6. Changes to Terms
              </h3>
              <p>
                We may modify these terms at any time. Continued use constitutes
                acceptance.
              </p>
            </div>
          </motion.section>

          {/* Privacy Policy */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-dark-surface rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>

            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mt-6 mb-3">
                1. Information We Collect
              </h3>
              <p>To provide our services, we collect:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Account information (email, name)</li>
                <li>Trip details (destinations, dates, budgets)</li>
                <li>Expense records (amounts, categories)</li>
                <li>Device information for analytics</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                2. How We Use Data
              </h3>
              <p>Your data is used to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Provide and improve our services</li>
                <li>Generate expense reports and calculations</li>
                <li>Personalize AI recommendations</li>
                <li>Prevent fraud and abuse</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                3. Data Sharing
              </h3>
              <p>We only share data:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>With group members you explicitly invite</li>
                <li>With service providers under confidentiality agreements</li>
                <li>When required by law</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                4. Security Measures
              </h3>
              <p>We implement:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Encryption of sensitive data</li>
                <li>Regular security audits</li>
                <li>Limited employee access</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                5. Your Rights
              </h3>
              <p>You may:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Access and download your data</li>
                <li>Request deletion of your account</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                6. Children's Privacy
              </h3>
              <p>
                Our Service is not intended for users under 13. We do not
                knowingly collect such data.
              </p>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm"
          >
            <p>Contact us at legal@triptrack.app for questions</p>
            <p className="mt-2">
              © {new Date().getFullYear()} TripTrack. All rights reserved.
            </p>
          </motion.footer>
        </div>
      </div>
    </>
  );
};

export default TermsAndPrivacy;
