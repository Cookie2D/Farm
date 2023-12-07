import { configureStore } from '@reduxjs/toolkit';

import { storageSlice } from './slices/storage';
import { areaSlice } from './slices/area';
import { modalSlice } from './slices/modal';
import { shopSlice } from './slices/shop';
import { notificationSlice } from './slices/notification';

// const preloadedState = localStorage.getItem('preloadedState')
//   ? JSON.parse(localStorage.getItem('preloadedState'))
//   : {}

const store = configureStore({
  reducer: {
    storage: storageSlice.reducer,
    area: areaSlice.reducer,
    shop: shopSlice.reducer,
    modal: modalSlice.reducer,
    notification: notificationSlice.reducer,
  },
  // preloadedState
});

// store.subscribe(() =>
//   localStorage.setItem('preloadedState', JSON.stringify(store.getState()))
// )

export default store;
