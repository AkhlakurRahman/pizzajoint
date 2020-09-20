import React from 'react';
import { motion } from 'framer-motion';

const containerVairent = {
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
};

const childrenVarient = {
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
      variants={containerVairent}
      initial='initial'
      animate='animateIn'
    >
      <h2>Thank you for your order :</h2>

      <motion.div variants={childrenVarient}>
        <p>You ordered a {pizza.base} pizza with:</p>
      </motion.div>
      <motion.div variants={childrenVarient}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
