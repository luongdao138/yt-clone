import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from 'redux-logger';
import reducer from './reducers';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(loggerMiddleware),
  devTools: true,
});

export default store;
