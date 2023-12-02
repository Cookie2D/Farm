import React from 'react';
import { useDispatch } from 'react-redux';
import { storageSlice } from '../../store/slices/storage';
import { areaSlice } from '../../store/slices/area';
import styles from './field.module.css';
import Timer from '../timer/Timer';
import { motion, useAnimate } from 'framer-motion';

export default function PlantedField({ id, plant }) {
  const dispatch = useDispatch();
  const canHarvest = React.useRef(false);
  const { append } = storageSlice.actions;
  const { harvest } = areaSlice.actions;
  const [scope, animate] = useAnimate();

  function handleHarvest(e) {
    if (canHarvest.current) {
      // TODO: create harvest animation
      putToStorage();
    }

    handleEarlyHarvestAttempt();
  }

  function putToStorage(e) {
    dispatch(append(plant));
    return dispatch(harvest(id));
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
function GardenCup({ plant }) {
  return (
    <div className={styles.plantation}>
      <img draggable={false} src={plant.image} alt={plant.fieldName} />
      <img draggable={false} src={plant.image} alt={plant.fieldName} />
      <img draggable={false} src={plant.image} alt={plant.fieldName} />
      <img draggable={false} src={plant.image} alt={plant.fieldName} />
    </div>
  );
}
