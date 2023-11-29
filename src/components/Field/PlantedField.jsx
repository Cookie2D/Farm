import React from 'react';
import { useDispatch } from 'react-redux';
import { storageSlice } from '../../store/slices/storage';
import { areaSlice } from '../../store/slices/area';
import styles from './field.module.css';

export default function PlantedField({ id, plant }) {
  const [harvestTime, setHarvestTime] = React.useState(plant.time);
  const [intervalId, setIntervalId] = React.useState(null);
  const [position, setPosition] = React.useState({});
  const containerRef = React.useRef();
  const dispatch = useDispatch();
  const { append } = storageSlice.actions;
  const { harvest } = areaSlice.actions;

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
      containerRef.current.classList.add(styles.move);
      const { x, y } = e.target;
      setPosition({ x, y });

      setTimeout(() => {
        dispatch(append(plant));
        return dispatch(harvest(id));
      }, 950);
    }

    // TODO: Add shake on prevent harvesting
    // e.target.className = `${styles.error} ${styles.field}`;
  }

  return (
    <div
      className={styles.field}
      style={{ zIndex: 1000 }}
      onClick={handleHarvest}
      ref={containerRef}
    >
      <GardenCup position={position} plant={plant} harvestTime={harvestTime} />
    </div>
  );
}

function GardenCup({ plant, harvestTime, position }) {
  const animation = harvestTime > 0 ? styles.growth : styles.pulse;

  return (
    <div
      style={{
        '--i': `${plant.time}s`,
        '--image-x': `-${position?.x}px`,
        '--image-y': `${position?.y}px`,
      }}
      className={`${styles.plantation} ${animation}`}
    >
      <img
        style={{ '--offset': `${0.25}s` }}
        src={plant.image}
        alt={plant.fieldName}
      />
      <img
        style={{ '--offset': `${0.5}s` }}
        src={plant.image}
        alt={plant.fieldName}
      />
      <img
        style={{ '--offset': `${0.75}s` }}
        src={plant.image}
        alt={plant.fieldName}
      />
      <img
        style={{ '--offset': `${1}s` }}
        src={plant.image}
        alt={plant.fieldName}
      />
    </div>
  );
}
