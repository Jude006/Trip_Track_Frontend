import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-text-primary dark:bg-dark-background text-gray-300 pt-16 pb-8 bottom-0 sticky">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              Trip<span className="text-primary">Track</span>
            </h3>
            <p className="mb-4 font-heading">
              The smart way to manage group travel budgets and expenses.
            </p>
            <div className="flex space-x-4">
              {[FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {[
            {
              title: "Product",
              links: [
                { name: "How It Works", href: "/how-it-works" },
                { name: "Features", href: "/features" },
                { name: "Testimonials", href: "/testimonials" },
              ],
            },
            {
              title: "Company",
              links: [
                { name: "About Us", href: "/about" },
                { name: "Demo", href: "/demo" },
                { name: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/terms" },
                { name: "Cookie Policy", href: "/terms" },
              ],
            },
          ].map((column, colIndex) => (
            <motion.div
              key={colIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: colIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4 text-lg">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              © {new Date().getFullYear()} TripTrack. All rights reserved.
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
