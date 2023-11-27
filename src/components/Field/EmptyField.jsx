import React from 'react';
import styles from './field.module.css';
import { useDispatch } from 'react-redux';
import { areaSlice } from '../../store/slices/area';
import { crops } from '../const/crops';

export default function EmptyField({ id }) {
  const [showTooltip, setShowTooltip] = React.useState(true);

  function handleOpenTooltip() {
    setShowTooltip(true);
  }

  function handleCloseTooltip() {
    setShowTooltip(false);
  }

  return (
    <div className={styles.field} onClick={handleOpenTooltip}>
      Plant
      {showTooltip && <Modal id={id} close={handleCloseTooltip} />}
    </div>
  );
}

function Modal({ id, close }) {
  const dispatch = useDispatch();
  const { plant } = areaSlice.actions;

  function handlePlant(crop) {
    dispatch(plant({ id, plant: crop }));
    close();
  }

  return (
    <div className={styles.modal}>
      {crops.list.map(crop => (
        <div
          key={crop.fieldName}
          className={styles.button}
          onClick={() => handlePlant(crop)}
        >
          {crop.fieldName}
        </div>
      ))}
    </div>
  );
}
