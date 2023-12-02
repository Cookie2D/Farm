import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storageSlice } from '../../store/slices/storage';
import { areaSlice } from '../../store/slices/area';
import styles from './field.module.css';
import Timer from '../timer/Timer';

export default function PlantedField({ id, plant }) {
  const dispatch = useDispatch();
  const canHarvest = useSelector(state => state.area.fields[id].grown);

  const { append } = storageSlice.actions;
  const { harvest, grewUp } = areaSlice.actions;

  function handleHarvest(e) {
    if (canHarvest) {
      // TODO: create harvest animation
      putToStorage();
    }

    //TODO: create error animation
  }

  function putToStorage(e) {
    dispatch(append(plant));
    return dispatch(harvest(id));
  }

  function growthEnd() {
    dispatch(grewUp(id));
  }

  return (
    <div
      className={styles.field}
      style={{ zIndex: 1000 }}
      onClick={handleHarvest}
    >
      <Timer time={plant.time} callback={growthEnd} />
      <GardenCup plant={plant} />
    </div>
  );
}
function GardenCup({ plant }) {
  return (
    <div className={styles.plantation}>
      {/* TODO: Disable dragable for this images */}
      <img src={plant.image} alt={plant.fieldName} />
      <img src={plant.image} alt={plant.fieldName} />
      <img src={plant.image} alt={plant.fieldName} />
      <img src={plant.image} alt={plant.fieldName} />
    </div>
  );
}
