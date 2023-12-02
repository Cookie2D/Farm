import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storageSlice } from '../../store/slices/storage';
import { areaSlice } from '../../store/slices/area';
import styles from './field.module.css';
import Timer from '../timer/Timer';
import { motion, useAnimate } from 'framer-motion';

export default function PlantedField({ id, plant }) {
  const dispatch = useDispatch();
  const canHarvest = useSelector(state => state.area.fields[id].grown);

  const { append } = storageSlice.actions;
  const { harvest, grewUp } = areaSlice.actions;
  const [scope, animate] = useAnimate();

  function handleHarvest(e) {
    if (canHarvest) {
      // TODO: create harvest animation
      putToStorage();
    }

    animate(scope.current, { rotate: [0, -1, 0, 1, 0] }, { duration: 0.2 });
    //TODO: create error notification
  }

  function putToStorage(e) {
    dispatch(append(plant));
    return dispatch(harvest(id));
  }

  function growthEnd() {
    dispatch(grewUp(id));
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
