import React from 'react';
import PlantedField from './PlantedField';
import EmptyField from './EmptyField';

export default function Field() {
  const [plant, setPlant] = React.useState(null);
  const seat = () => {
    setPlant({
      fieldName: 'wheat',
      count: 1,
      time: 2
    });
  };

  return plant ? (
    <PlantedField plant={plant} setPlant={setPlant} />
  ) : (
    <EmptyField seat={seat} />
  );
}
