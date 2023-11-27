import React from 'react';
import styles from './field.module.css';

export default function EmptyField({ seat }) {
  return (
    <div className={styles.field} onClick={seat}>
      Field
    </div>
  );
}
