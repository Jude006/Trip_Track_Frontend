import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button1 from "../common/button/Button1";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former travel blogger turned tech entrepreneur. Passionate about removing friction from group experiences.",
      image: "/images/team/alex.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Ayomide Red",
      role: "Lead Developer",
      bio: "Full-stack wizard with a knack for AI. Built the core algorithms that power our smart splits.",
      image: "/images/team/jude.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Savilla D",
      role: "Product Designer",
      bio: "Creates interfaces that feel like second nature. Believes good design should be invisible.",
      image: "/images/team/jordan.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Fuad Ishola",
      role: "Growth Marketer",
      bio: "Storyteller who connects our solution to real traveler pain points. Data-driven creative.",
      image: "/images/team/taylor.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  return (
    <section className="relative py-24 bg-background dark:bg-dark-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/dot-grid.svg')] opacity-[0.03] dark:opacity-[0.02]" />
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 dark:bg-dark-primary/10 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5,
          }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 dark:bg-secondary/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 dark:bg-dark-primary/10 rounded-full text-primary dark:text-dark-primary font-medium font-heading mb-6 border border-primary/20 dark:border-dark-primary/20">
            Meet The Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-6">
            The{" "}
            <span className="text-primary dark:text-dark-primary">Minds</span>{" "}
            Behind Your Better Trips
          </h2>
          <p className="text-lg text-gray-700 dark:text-dark-text-secondary">
            We're travelers, technologists, and problem-solvers united by one
            mission: make group travel finances frictionless.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/15 dark:to-secondary/15 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="relative bg-white dark:bg-dark-surface rounded-2xl overflow-hidden shadow-xs border-2 border-gray-100 dark:border-gray-800 h-full transition-all duration-300 group-hover:-translate-y-1 dark:group-hover:border-dark-primary/50">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary dark:text-dark-primary mb-4">
                    {member.role}
                  </p>

                  {/* Social links - more refined */}
                  <div className="flex gap-2">
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:text-dark-primary transition-all duration-200 border border-gray-200 dark:border-gray-700"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedin className="text-sm" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:text-dark-primary transition-all duration-200 border border-gray-200 dark:border-gray-700"
                      aria-label={`${member.name} Twitter`}
                    >
                      <FaTwitter className="text-sm" />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:text-dark-primary transition-all duration-200 border border-gray-200 dark:border-gray-700"
                      aria-label={`${member.name} GitHub`}
                    >
                      <FaGithub className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-dark-text-primary mb-6">
            Want to join our journey?
          </h3>
          <div className="inline-flex gap-4 flex-wrap justify-center">
           <Link to='/dashboard' >
           <Button1 text='Get Started' color="bg-primary text-white dark:bg-dark-primary"/>
           </Link>
            <Link to='/contact-us'>
              <button className="px-6 py-2 bg-white dark:bg-dark-surface border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-dark-primary text-gray-900 dark:text-dark-text-primary rounded-full font-medium transition-all duration-200 shadow-xs hover:shadow-sm">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
