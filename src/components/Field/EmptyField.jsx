import React from 'react';
import styles from './field.module.css';
import Modal from '../crop-selector/CropSelector';

export default function EmptyField({ id }) {
  const [showTooltip, setShowTooltip] = React.useState(false);

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
