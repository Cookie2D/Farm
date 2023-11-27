import React from 'react';
import PlantedField from './PlantedField';
import EmptyField from './EmptyField';

export default function Field({ field }) {
  return field.plant ? (
    <PlantedField {...field} />
  ) : (
    <EmptyField id={field.id} />
  );
}
