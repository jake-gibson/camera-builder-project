import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import  equipmentSlice  from './reducers/equipmentSlice';
import dynamicSlice from './reducers/dynamicSlice';

const store = configureStore({
  devTools: true,
  reducer: {
    equip: equipmentSlice,
    dynamic: dynamicSlice
  },
});


export default store;