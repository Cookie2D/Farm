import React from 'react';
import { useDispatch } from 'react-redux';
import { storageSlice } from '../../store/slices/storage';
import { areaSlice } from '../../store/slices/area';
import styles from './field.module.css';
import Timer from '../timer/Timer';
import { easeInOut, easeOut, motion, useAnimate } from 'framer-motion';

export default function PlantedField({ id, plant }) {
  const dispatch = useDispatch();
  const canHarvest = React.useRef(false);
  const { append } = storageSlice.actions;
  const { harvest } = areaSlice.actions;
  const [scope, animate] = useAnimate();

  function handleHarvest() {
    if (canHarvest.current) {
      dispatch(append(plant));
      return dispatch(harvest(id));
    }

    handleEarlyHarvestAttempt();
  }

  function growthEnd() {
    canHarvest.current = true;
  }

  function handleEarlyHarvestAttempt() {
    animate(scope.current, { rotate: [0, -1, 0, 1, 0] }, { duration: 0.2 });
    //TODO: create error notification
  }

  return (
    <motion.div
      className={styles.field}
      style={{ zIndex: 1000 }}
      onClick={handleHarvest}
      ref={scope}
    >
      <Timer time={plant.time} callback={growthEnd} />
      <GardenCup plant={plant} />
    </motion.div>
  );
}

// TODO: separate to another file
function GardenCup({ plant }) {
  return (
    <div className={styles.plantation}>
      <CropImage plant={plant} />
      <CropImage plant={plant} />
      <CropImage plant={plant} />
      <CropImage plant={plant} />
    </div>
  );
}

// TODO: separate to another file
function CropImage({ plant }) {
  return (
    <motion.img
      initial={{ scale: 0.1 }}
      animate={{ scale: 1 }}
      exit={{
        opacity: [1, 1, 0],
        y: [0, -15, 20],
        transition: { duration: 1, ease: easeInOut },
      }}
      draggable={false}
      src={plant.image}
      alt={plant.fieldName}
      transition={{ duration: plant.time, ease: easeOut }}
    />
  );
}
