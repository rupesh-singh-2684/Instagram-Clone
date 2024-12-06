import {configureStore} from '@reduxjs/toolkit';
import savedPostReducer from './slice';

export const store = configureStore({
  reducer: {
    savedPost: savedPostReducer,
  },
});