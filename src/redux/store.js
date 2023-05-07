import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import globalReducer from './global/slice';
import authReducer from './auth/slice';
import financesReducer from './transaction/slice';
import currencyReducer from './currency/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const currencyPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['data', 'lastFetchDate'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    global: globalReducer,
    finances: financesReducer,
    currency: persistReducer(currencyPersistConfig, currencyReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
