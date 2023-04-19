import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get(url);
  return response.data;
});

const initialState = {
  rockets: [],
  loading: false,
  error: '',
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: true,

          };
        }
        return rocket;
      });
      return { ...state, rockets: newState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const rockets = action.payload.map((rocket) => ({
        reserved: false,

        ...rocket,
      }));
      return {
        ...state,
        loading: false,
        rockets,
      };
    });

    builder.addCase(fetchRockets.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export default rocketsSlice.reducer;
export const { bookRocket } = rocketsSlice.actions;
