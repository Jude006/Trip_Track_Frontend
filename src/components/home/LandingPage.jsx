import React from 'react';
import { FaPlane, FaWallet, FaChartPie, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button1 from '../common/button/Button1';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      ease: "easeOut"
    }
  }
};

const imageItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// New BlurText component
const BlurText = ({ text, delay = 0.05, className }) => {
  const letters = text.split('');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delay, delayChildren: i * delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 20
    }
  };

  return (
    <motion.div 
      className={`flex ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, i) => (
        <motion.span 
          key={i}
          variants={child}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const LandingPage = () => {
  return (
    <motion.header 
      initial="hidden"
      animate="show"
      variants={container}
      className='relative md:h-[90vh] h-fit bg-background dark:bg-dark-background grid grid-cols-12 md:px-20 px-4 py-12 md:gap-10 w-[100%] overflow-hidden'
    >
      {/* Gradient Background Elements */}
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/travel-pattern.svg')] opacity-[0.03] dark:opacity-[0.02]" />
        <motion.div 
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute top-1/4 left-1/4 w-60 h-60 bg-primary/20 dark:bg-dark-primary/20 rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{
            x: [0, -15, 0],
            y: [0, 20, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/20 dark:bg-secondary/20 rounded-full blur-[100px]"
        />
      </motion.div>

      {/* Left Content Column */}
      <div className='md:col-span-6 col-span-12 flex flex-col justify-center md:gap-8 gap-6 relative z-10'>
        <motion.div variants={item} className='flex items-center md:gap-3 gap-1'>
          <div className='p-2 rounded-full bg-primary/10 dark:bg-dark-primary/10'>
            <FaPlane className='text-primary dark:text-dark-primary text-xl' />
          </div>
          <h2 className='text-primary dark:text-dark-primary font-medium font-heading md:text-3xl whitespace-nowrap text-lg'>
            Smart Travel Companion
          </h2>
        </motion.div>
        
        {/* Updated Heading with BlurText */}
        <div className='md:text-5xl text-2xl font-heading font-bold leading-relaxed'>
          <BlurText 
            text="Plan, Share & Track"
            delay={0.03}
            className="text-text-primary  dark:text-dark-text-primary"
          />
          
          <BlurText 
            text="Group Trips Effortlessly"
            delay={0.03}
            className="text-primary dark:text-dark-primary "
          />
        </div>
        
        <motion.p 
          variants={item}
          className='text-sm text-text-secondary dark:text-dark-text-primary'
        >
          TripCoin simplifies group travel with AI-powered budgeting, expense splitting, 
          and collaborative planning—so you can focus on the adventure.
        </motion.p>
        
        <motion.div 
          variants={container}
          className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-text-primary dark:text-dark-text-primary'
        >
          <motion.div variants={item} className='flex items-center gap-2 md:whitespace-nowrap'>
            <FaWallet className='text-secondary' />
            <span className='text-sm'>Expense Tracking</span>
          </motion.div>
          <motion.div variants={item} className='flex items-center gap-2'>
            <FaChartPie className='text-accent' />
            <span className='text-sm'>Budget Analytics</span>
          </motion.div>
          <motion.div variants={item} className='flex items-center gap-2'>
            <FaLightbulb className='text-secondary' />
            <span className='text-sm'>AI Assistant</span>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={item}
          className='flex md:flex-row flex-col justify-start gap-6 mt-6 md:pr-40'
        >
          <Button1 text='Get Started' color='bg-primary dark:bg-primary text-white' hover='hover:bg-text-primary hover:dark:bg-dark-text-primary hover:dark:text-dark-background' />
          <Button1 text='Contact Us' color='bg-text-primary  dark:bg-accent text-white' hover='hover:bg-primary hover:dark-bg-primary' />
        </motion.div>
      </div>
      
      <motion.div 
        variants={container}
        className='md:col-span-6 col-span-12 md:flex hidden flex-col justify-center items-center gap-4 relative z-10'
      >
       <motion.div variants={container} className='flex gap-10 items-center'>
        <motion.img 
          variants={imageItem}
          src="/images/bg3.jpg" 
          className='h-40 w-40 rounded-full object-cover bg-blue-400 shadow-lg' 
          alt="Travel planning" 
        />
        <motion.img 
          variants={imageItem}
          src="/images/bg4.jpg" 
          className='h-72 w-72 rounded-full object-cover bg-blue-400 shadow-lg' 
          alt="Group travel" 
        />
       </motion.div>
       <motion.div variants={container} className='flex gap-8 items-center'>
        <motion.img 
          variants={imageItem}
          src="/images/g1.jpg" 
          className='h-64 w-64 rounded-full object-cover bg-blue-400 shadow-lg' 
          alt="Budget tracking" 
        />
        <motion.img 
          variants={imageItem}
          src="/images/bg2.jpg" 
          className='h-40 w-40 rounded-full object-cover bg-blue-400 shadow-lg' 
          alt="Destination" 
        />
       </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50
          }}
          animate={{
            opacity: [0, 0.4, 0],
            y: Math.random() * 100 - 50
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 3
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`
          }}
          className={`absolute rounded-full ${
            i % 3 === 0 ? 'bg-primary/30 dark:bg-dark-primary/30' : 
            i % 3 === 1 ? 'bg-secondary/30 dark:bg-secondary/30' : 'bg-accent/30 dark:bg-accent/30'
          }`}
        />
      ))}
    </motion.header>
  );
};

export default LandingPage;