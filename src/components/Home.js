import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariant = {
  initial: {
    opacity: 0,
  },
  animateIn: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.9,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const buttonVariant = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
  },
};

const Home = () => {
  return (
    <motion.div
      className='home container'
      variants={containerVariant}
      initial='initial'
      animate='animateIn'
      exit='exit'
    >
      <motion.h2 animate={{ fontSize: 50 }}>Welcome to Pizza Joint</motion.h2>
      <Link to='/base'>
        <motion.button variants={buttonVariant} whileHover='hover'>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
