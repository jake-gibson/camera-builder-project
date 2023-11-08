import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import { equipmentSlice } from './reducers/equipmentSlice';

const store = configureStore({
  devTools: true,
  reducer: {
    equip: equipmentSlice
  },
});


export default store;