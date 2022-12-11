import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { phoneBookSlice } from './phoneBookSlice';
import { userAuthSlice } from './userAuthSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: phoneBookSlice.reducer,
    user: persistReducer(persistConfig, userAuthSlice.reducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// export default store;
