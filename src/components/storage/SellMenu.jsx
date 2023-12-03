import React from 'react';
import styles from './sell-menu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { storageSlice } from '../../store/slices/storage';
import { motion, AnimatePresence } from 'framer-motion';

export default function SellMenu() {
  const [sellCount, setSellCount] = React.useState(1);
  const [error, setError] = React.useState('');
  const dispatch = useDispatch();
  const { sellCrop, setMenuField } = storageSlice.actions;
  const storage = useSelector(state => state.storage);

  const selectedField = storage.menu.selectedField || {};
  const maxAmount = storage.barn[selectedField.fieldName];

  function handleSell(e) {
    e.preventDefault();
    dispatch(setMenuField(null));

    if (sellCount <= 0) {
      // TODO: throw error here;
    }

    const amount = sellCount * selectedField.cost;
    if (!!amount) {
      // TODO: throw validation error here;
    }

    dispatch(
      sellCrop({
        amount: amount,
        fieldName: selectedField.fieldName,
        count: sellCount,
      })
    );
    // TODO: think about best way
    setSellCount(0);
  }

  function handleCountChange(e) {
    setSellCount(Number(e.target.value));
  }

  return (
    <AnimatePresence>
      {storage.menu.selectedField && (
        <motion.form
          onSubmit={handleSell}
          className={styles.menu}
          animate={{ y: 0, zIndex: 300, scaleY: 1, scaleX: 1, borderRadius: 0 }}
          exit={{ opacity: 0, y: -50, zIndex: 300 }}
          initial={{
            zIndex: 300,
            scaleY: 0,
            scaleX: 0.5,
            y: -220,
          }}
          transition={{
            type: 'spring',
            damping: 15,
          }}
        >
          <div className={styles.image}>
            <img
              className={styles.cropImage}
              draggable={false}
              src={selectedField.image}
              alt={selectedField.fieldName}
            />
          </div>
          <h3 className={styles.title}>Sell: {selectedField.fieldName}</h3>
          <label>
            Count:
            <input
              value={sellCount}
              onChange={handleCountChange}
              type="number"
              min={1}
              max={maxAmount}
            />
          </label>
          <div className={styles.menuResult}>
            Total Cost: {sellCount * selectedField.cost}$
          </div>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
