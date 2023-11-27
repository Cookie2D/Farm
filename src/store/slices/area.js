import { createSlice } from '@reduxjs/toolkit';
const defaultField = {
  id: 0,
  plant: null,
};

export const areaSlice = createSlice({
  name: 'storage',
  initialState: {
    fields: [defaultField],
  },
  reducers: {
    plant: (state, action) => {
      const { id, plant } = action.payload;
      const index = state.fields.findIndex(f => f.id === id);
      state.fields[index].plant = plant;
    },
    harvest: (state, action) => {
      const index = state.fields.findIndex(f => f.id === action.payload);
      state.fields[index].plant = null;
    },
  }
});

export const { actions } = areaSlice;
