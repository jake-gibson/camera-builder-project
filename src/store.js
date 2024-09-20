import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import equipmentSlice from './reducers/equipmentSlice';
import dynamicSlice from './reducers/dynamicSlice';
import fetchingMiddleware from './reducers/fetchingMiddleware';
import { aiProductInfo } from './reducers/fetchingAPI';

const store = configureStore({
  devTools: true,
  reducer: {
    equip: equipmentSlice,
    dynamic: dynamicSlice,
    [aiProductInfo.reducerPath]: aiProductInfo.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(fetchingMiddleware())
      .concat(aiProductInfo.middleware),
});

// setupListeners(store.dispatch);

export default store;
