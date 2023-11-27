import { configureStore } from '@reduxjs/toolkit'

import { storageSlice } from './slices/storage'

// const preloadedState = localStorage.getItem('preloadedState')
//   ? JSON.parse(localStorage.getItem('preloadedState'))
//   : {}

const store = configureStore({
  reducer: {
    storage: storageSlice.reducer, 
  },
  // preloadedState
})

// store.subscribe(() =>
//   localStorage.setItem('preloadedState', JSON.stringify(store.getState()))
// )

export default store
