import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};
const url = 'https://api.spacexdata.com/v3/missions';
export const fetchMissions = createAsyncThunk('missions/fetchMissions', async (_, { rejectWithValue }) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (err) {
    return rejectWithValue('Unable to fetch data');
  }
});
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const missions = action.payload.map((item) => ({
        ...item,
      }));
      return {
        ...state,
        loading: false,
        missions,
      };
    });

    builder.addCase(fetchMissions.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export default missionSlice.reducer;
