import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: [
    { type: 'error', text: 'harvest error', id:0 },
  ],
  reducers: {
    show: (state, action) => {
      state.push({...action.payload, id: state.length});
    },
    remove: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { actions } = notificationSlice;
