import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    join: (state, action) => {
      state.push(action.payload);
    },
    leave: (state, action) => {
      const Status = [...state];
      state.splice(0, state.length);
      state.push(...Status.filter((status) => status.item_id !== action.payload));
    },
  },
});

export const { join, leave } = missionSlice.actions;
export default missionSlice.reducer;
