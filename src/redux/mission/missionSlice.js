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
  reducers: {
    joinMission: (state, action) => {
      const newMissions = state.missions.map((mission) => {
        if (action.payload !== mission.mission_id) {
          return mission;
        }
        return {
          ...mission,
          joined: true,
        };
      });
      return {
        ...state,
        missions: newMissions,
      };
    },
    leaveMission: (state, action) => {
      const newMissions = state.missions.map((mission) => {
        if (action.payload !== mission.mission_id) {
          return mission;
        }
        return {
          ...mission,
          joined: false,
        };
      });
      return {
        ...state,
        missions: newMissions,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const missions = action.payload.map((mission) => ({
        ...mission,
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
export const { joinMission, leaveMission } = missionSlice.actions;
