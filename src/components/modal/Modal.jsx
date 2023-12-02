import React from 'react';
import styles from './modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { modalSlice } from '../../store/slices/modal';

export default function Modal({ children, title, type }) {
  const dispatch = useDispatch();
  const open = useSelector(state => state.modal[type]);
  const { toggle } = modalSlice.actions;

  function handleClose() {
    dispatch(toggle({ type }));
  }
  // TODO: add open and closing animation
  if (!open) return;
  return (
    <div onClick={handleClose} className={styles.wrapper}>
      <div onClick={e => e.stopPropagation()} className={styles.container}>
        <div className={styles.header}>{title}</div>
        <div>{children}</div>
        <button onClick={handleClose} className={styles.button}>
          Close
        </button>
      </div>
    </div>
  );
}
