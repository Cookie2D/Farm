import { createSlice } from '@reduxjs/toolkit';

export const storageSlice = createSlice({
  name: 'storage',
  initialState: {
    barn: {
      wheat: 0,
      carrot: 0,
      corn: 0,
    },
    
    money: 0,
  },
  reducers: {
    append: (state, action) => {
      const { fieldName, count } = action.payload;
      state.barn[fieldName] = state.barn[fieldName] + count;
    },
    remove: (state, action) => {
      const { fieldName, count } = action.payload;
      state.barn[fieldName] = state.barn[fieldName] - count;
    },
  },
});

export const { actions } = storageSlice;
