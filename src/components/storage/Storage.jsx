import React from 'react';
import { useSelector } from 'react-redux';
import { list } from '../../const/crops/crops';
import styles from './storage.module.css';

export default function Storage() {
  const storage = useSelector(state => state.storage.barn);

  console.log(storage, 'storage');
  return (
    <div className={styles.wrapper}>
      <div>
        <table className={styles.tableContainer}>
          <thead className={styles.tableHead}>
            <tr>
              <th></th>
              <th>Crop</th>
              <th>Count</th>
              <th>Cost</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {list.map(crop => {
              const cropCount = storage[crop.fieldName];
              return (
                <tr>
                  <td>
                    <img
                      className={styles.cropImage}
                      draggable={false}
                      src={crop.image}
                      alt={crop.fieldName}
                    />
                  </td>
                  <td>{crop.fieldName}</td>
                  <td>{cropCount}</td>
                  <td>{crop.cost}$</td>
                  <td>{cropCount * crop.cost}$</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
