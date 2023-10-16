// src/store/index.ts
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './redcuers';

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export default store;
