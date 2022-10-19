import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import greetingReducer, { fetchGreeting } from './greetingReducer';

const store = configureStore({
  reducer: greetingReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.dispatch(fetchGreeting);

export default store;
