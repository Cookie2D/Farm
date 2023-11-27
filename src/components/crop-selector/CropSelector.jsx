import React from 'react';
import { crops } from '../../const/crops';
import { useDispatch } from 'react-redux';
import { areaSlice } from '../../store/slices/area';
import styles from './crop-selector.module.css';

export default function Modal({ id, close }) {
  const modalRef = React.useRef();

  const dispatch = useDispatch();
  const { plant } = areaSlice.actions;

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      function handleClickOutside(event) {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          close();
        }
      }

      document.addEventListener('click', handleClickOutside);

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, 100);

    return () => clearTimeout(timerId);
  }, [close]);

  function handlePlant(crop) {
    dispatch(plant({ id, plant: crop }));
    close();
  }

  return (
    <div ref={modalRef} className={styles.modal}>
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
