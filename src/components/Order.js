import React from 'react';
import { motion } from 'framer-motion';

const containerVairant = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  animateIn: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const childrenVariant = {
  initial: {
    opacity: 0,
  },
  animateIn: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className='container order'
      variants={containerVairant}
      initial='initial'
      animate='animateIn'
      exit='exit'
    >
      <h2>Thank you for your order :</h2>

      <motion.div variants={childrenVariant}>
        <p>You ordered a {pizza.base} pizza with:</p>
      </motion.div>
      <motion.div variants={childrenVariant}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
