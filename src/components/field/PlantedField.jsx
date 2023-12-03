import React from 'react';
import { useDispatch } from 'react-redux';
import { storageSlice } from '../../store/slices/storage';
import { areaSlice } from '../../store/slices/area';
import styles from './field.module.css';
import Timer from '../timer/Timer';
import GardenCup from '../garden-cup/GardenCup';
import { motion, useAnimate } from 'framer-motion';

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
      style={{ zIndex: 50 }}
      onClick={handleHarvest}
      ref={scope}
    >
      <Timer time={plant.time} callback={growthEnd} />
      <GardenCup plant={plant} />
    </motion.div>
  );
}
