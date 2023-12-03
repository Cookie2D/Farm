import React from 'react';
import styles from './sell-menu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { storageSlice } from '../../store/slices/storage';

export default function SellMenu() {
  const [sellCount, setSellCount] = React.useState(0);
  const dispatch = useDispatch();
  const { sellCrop, setMenuField } = storageSlice.actions;
  const storage = useSelector(state => state.storage);

  if (!storage.menu.selectedField) return;
  const selectedField = storage.menu.selectedField;
  const maxAmount = storage.barn[selectedField.fieldName];

  function handleSell(e) {
    e.preventDefault();

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
    // dispatch(setMenuField(null));
    setSellCount(0);
  }

  function handleCountChange(e) {
    setSellCount(Number(e.target.value));
  }

  return (
    <form onSubmit={handleSell} className={styles.menu}>
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
    </form>
  );
}
