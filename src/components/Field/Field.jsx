import React from 'react';
import PlantedField from './PlantedField';
import EmptyField from './EmptyField';
import CropSelector from '../crop-selector/CropSelector';

export default function Field({ field }) {
  return (
    <div style={{ position: 'relative', userSelect: 'none' }}>
      {field.plant ? <PlantedField {...field} /> : <EmptyField id={field.id} />}
      <CropSelector id={field.id} />
    </div>
  );
}
