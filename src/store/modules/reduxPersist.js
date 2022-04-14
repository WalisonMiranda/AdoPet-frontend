/* eslint-disable import/no-anonymous-default-export */
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'ADOPET',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducers;
};
