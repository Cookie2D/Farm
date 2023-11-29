import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './field.module.css';
import { storageSlice } from '../../store/slices/storage';
import { areaSlice } from '../../store/slices/area';

export default function PlantedField({ id, plant }) {
  const [harvestTime, setHarvestTime] = React.useState(plant.time);
  const [intervalId, setIntervalId] = React.useState(null);
  const { append } = storageSlice.actions;
  const { harvest } = areaSlice.actions;
  const dispatch = useDispatch();

  React.useEffect(() => {
    const id = setInterval(() => {
      setHarvestTime(prev => prev - 1);
    }, 1000);

    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    if (harvestTime <= 0) clearInterval(intervalId);
  }, [harvestTime, intervalId]);

  function handleHarvest(e) {
    if (harvestTime <= 0) {
      dispatch(append(plant));
      return dispatch(harvest(id));
    }

    e.target.className = `${styles.error} ${styles.field}`;
  }

  return (
    <div
      className={styles.field}
      style={{ zIndex: 1000 }}
      onClick={handleHarvest}
    >
      {plant.fieldName}
      {harvestTime > 0 ? <p>{harvestTime}s</p> : <p>Ready to harvest</p>}
    </div>
  );
}
