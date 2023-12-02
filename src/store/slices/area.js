import { createSlice } from '@reduxjs/toolkit';

const FIELD_SIZE = 15; // Change this value to adjust the size of the array
const mockFields = Array.from({ length: FIELD_SIZE }, (_, id) => ({ id, plant: null, grown: false }));

export const areaSlice = createSlice({
  name: 'area',
  initialState: {
    fields: mockFields,
  },
  reducers: {
    plant: (state, action) => {
      const { id, plant } = action.payload;
      const index = state.fields.findIndex(f => f.id === id);
      state.fields[index].plant = plant;
    },
    grewUp: (state, action) => {
      const index = state.fields.findIndex(f => f.id === action.payload);
      state.fields[index].grown = true;
    },
    harvest: (state, action) => {
      const index = state.fields.findIndex(f => f.id === action.payload);
      state.fields[index].plant = null;
      state.fields[index].grown = false;
    },
  }
});

export const { actions } = areaSlice;
