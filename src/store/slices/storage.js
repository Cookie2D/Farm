import { createSlice } from '@reduxjs/toolkit';

export const storageSlice = createSlice({
  name: 'storage',
  initialState: {
    barn: {
      wheat: 0,
      carrot: 20,
      corn: 0,
    },
    menu: {
      selectedField: null
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
    setMenuField: (state, action) => {
      state.menu.selectedField = action.payload;
    },
    sellCrop: (state, action) => {
      const {amount, fieldName, count} = action.payload;
      if(state.barn[fieldName] < count) throw new Error('bla')
      
      state.barn[fieldName] -= count;
      state.money += amount;
    },
  },
});

export const { actions } = storageSlice;
