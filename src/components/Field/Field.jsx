import React from 'react';
import PlantedField from './PlantedField';
import EmptyField from './EmptyField';
import CropSelector from '../crop-selector/CropSelector';
import styles from './field.module.css';

export default function Field({ field }) {
  // TODO: Add field texture
  return (
    <div className={styles.container}>
      {field.plant ? <PlantedField {...field} /> : <EmptyField id={field.id} />}
      <CropSelector id={field.id} />
    </div>
  );
}
