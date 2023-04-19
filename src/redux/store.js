import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketSlcie';
import missionReducer from './mission/missionSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
