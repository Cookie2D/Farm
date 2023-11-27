import { createSlice } from '@reduxjs/toolkit'

export const storageSlice = createSlice({
  name: 'storage',
  initialState: {
    wheat: 0
  },
  reducers: {
    append: (state, action) => {
      const {fieldName, count} = action.payload;
      state[fieldName] = state[fieldName] + count
    },
    remove: (state, action) => {
      const {fieldName, count} = action.payload;
      state[fieldName] = state[fieldName] - count
    }
  }
})

export const { actions } = storageSlice
