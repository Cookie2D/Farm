import { configureStore } from '@reduxjs/toolkit';

import { storageSlice } from './slices/storage';
import { areaSlice } from './slices/area';
import { modalSlice } from './slices/modal';

// const preloadedState = localStorage.getItem('preloadedState')
//   ? JSON.parse(localStorage.getItem('preloadedState'))
//   : {}

const store = configureStore({
  reducer: {
    storage: storageSlice.reducer,
    area: areaSlice.reducer,
    modal: modalSlice.reducer,
  },
  // preloadedState
});

// store.subscribe(() =>
//   localStorage.setItem('preloadedState', JSON.stringify(store.getState()))
// )

export default store;
