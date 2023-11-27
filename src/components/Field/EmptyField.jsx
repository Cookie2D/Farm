import React from 'react';
import styles from './field.module.css';
import { useDispatch } from 'react-redux';
import { areaSlice } from '../../store/slices/area';

const wheat = {
  fieldName: 'wheat',
  count: 1,
  time: 2,
};

export default function EmptyField({ id }) {
  const dispatch = useDispatch();
  const { plant } = areaSlice.actions;
  function seat() {
    dispatch(plant({ id, crop: wheat }));
  }

  return (
    <div className={styles.field} onClick={seat}>
      Field
    </div>
  );
}
