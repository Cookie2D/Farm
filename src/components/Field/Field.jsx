import React from 'react';
import PlantedField from './PlantedField';
import EmptyField from './EmptyField';
import CropSelector from '../crop-selector/CropSelector';
import { motion } from 'framer-motion';
import styles from './field.module.css';

export default function Field({ field }) {
  // TODO: Add field texture
  const variants = {
    initial: {
      opacity: 0,

      y: 200,
      backdropFilter: 'blur(16px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0,
      },
    },
    animate: initial => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,

      backdropFilter: 'blur(0)',
      transition: {
        type: 'spring',
        stiffness: 20,
        ease: 'easyInOut',
      },
    }),
    scale: {
      scale: 1.1,
      transition: {
        ease: 'easeInOut',
        delay: 0,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      className={styles.container}
      whileHover="scale"
    >
      {field.plant ? <PlantedField {...field} /> : <EmptyField id={field.id} />}
      <CropSelector id={field.id} />
    </motion.div>
  );
}
