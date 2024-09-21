import { createSlice } from '@reduxjs/toolkit';
import debug from '../utils/debugLog';

export const equipmentSlice = createSlice({
  name: 'equip',
  initialState: {
    url: '', //not in use, originally built to fetch a given products specs
    totalCost: 0,
    currentEqType: '',
    aiComparison: {
      index: 'firstBuild',
      firstBuild: { imgURL: 'none', price: 0, quantity: 0, loaded: false },
      secondBuild: { imgURL: 'none', price: 0, quantity: 0, loaded: false },
      compared: false,
      comparisonResponse: '',
    },
    lensBuild: { imgURL: 'lens', price: 0, quantity: 0, loaded: false },
    cameraBuild: { imgURL: 'camera', price: 0, quantity: 0, loaded: false },
    batteryBuild: { imgURL: 'battery', price: 0, quantity: 0, loaded: false },
    mediaBuild: { imgURL: 'card', price: 0, quantity: 0, loaded: false },
    gripBuild: { imgURL: 'grip', price: 0, quantity: 0, loaded: false },
    aksBuild: { imgURL: 'monitor', price: 0, quantity: 0, loaded: false },
    //     {imgURL: 'videofeed', price: 0},
    //     {imgURL: 'mic', price: 0},
    //     {imgURL: 'cables', price: 0}
    // ]
  },
  reducers: {
    updateURL: (state, action) => {
      state.url = action.payload.url;
      state.currentEqType = action.payload.eq;
    },
    addItem: (state, action) => {
      const objectType = {
        Lens: 'lensBuild',
        Camera: 'cameraBuild',
        Battery: 'batteryBuild',
        Media: 'mediaBuild',
        Grip: 'gripBuild',
        AKS: 'aksBuild',
      };

      //state[lensBuild] = lens{ title, price, link, imgURL}
      //basically saying, if the product is the same as the one already there skip
      if (
        action.payload.data.imgURL !==
        state[objectType[state.currentEqType]].imgURL
      ) {
        state[objectType[state.currentEqType]] = {
          ...action.payload.data, //title, price, link, imgURL
          quantity: 1,
          loaded: true,
        };
        state.totalCost =
          state.lensBuild.price * state.lensBuild.quantity +
          state.cameraBuild.price * state.cameraBuild.quantity +
          state.batteryBuild.price * state.batteryBuild.quantity +
          state.mediaBuild.price * state.mediaBuild.quantity +
          state.gripBuild.price * state.gripBuild.quantity +
          state.aksBuild.price * state.aksBuild.quantity;
      }
    },
    loadOldBuild: (state, action) => {
      // debug.log(action.payload.target)
      // debug.log(action.payload.data)

      const {
        totalCost,
        lensBuild,
        cameraBuild,
        batteryBuild,
        mediaBuild,
        gripBuild,
        aksBuild,
      } = action.payload.data;

      state.totalCost = totalCost;
      state.lensBuild = lensBuild;
      state.cameraBuild = cameraBuild;
      state.batteryBuild = batteryBuild;
      state.mediaBuild = mediaBuild;
      state.gripBuild = gripBuild;
      state.aksBuild = aksBuild;
    },
    remove: (state, action) => {
      const convertStr = {
        lensBuild: 'lens',
        cameraBuild: 'camera',
        batteryBuild: 'battery',
        mediaBuild: 'card',
        gripBuild: 'grip',
        aksBuild: 'monitor',
      };

      const eqType = action.payload.type;

      state[eqType] = {
        imgURL: convertStr[eqType],
        price: 0,
        quantity: 0,
        loaded: false,
      };
      //area for refactoring cleaning up bulk, making utility functions
      state.totalCost =
        state.lensBuild.price * state.lensBuild.quantity +
        state.cameraBuild.price * state.cameraBuild.quantity +
        state.batteryBuild.price * state.batteryBuild.quantity +
        state.mediaBuild.price * state.mediaBuild.quantity +
        state.gripBuild.price * state.gripBuild.quantity +
        state.aksBuild.price * state.aksBuild.quantity;
    },
    increment: (state, action) => {
      const eqType = action.payload.type;
      const preChange = state[eqType].price * state[eqType].quantity;
      const postChange = state[eqType].price * (state[eqType].quantity + 1);

      state[eqType].quantity++;
      state.totalCost = state.totalCost - preChange + postChange;
    },
    decrement: (state, action) => {
      const eqType = action.payload.type;

      if (state[eqType].quantity !== 0) {
        const preChange = state[eqType].price * state[eqType].quantity;
        const postChange = state[eqType].price * (state[eqType].quantity - 1);

        state[eqType].quantity--;
        state.totalCost = state.totalCost - preChange + postChange;
      }
    },
    aiQuery: (state, action) => {
      const eqType = action.payload.type;
      const currIndex = state.aiComparison.index;
      debug.log(currIndex);

      //Populate first or second slot for product to compare
      state.aiComparison[currIndex] = state[eqType];
      state.aiComparison.index =
        currIndex === 'firstBuild' ? 'secondBuild' : 'firstBuild';

      //Reset AI Response state upon addition of new product to compare
      state.aiComparison.compared = false;
      state.aiComparison.comparisonResponse = '';
    },
    toggleCompared: (state, action) => {
      state.aiComparison.compared = true;
    },
    toggleComparedForMiddleware: (state, action) => {
      state.aiComparison.compared = true;

      //OPTION 2:
      const aiRes = action.payload;
      state.aiComparison.comparisonResponse = aiRes;
    },
  },
});

export const {
  updateURL,
  addItem,
  loadOldBuild,
  remove,
  increment,
  decrement,
  aiQuery,
  toggleCompared,
  toggleComparedForMiddleware,
} = equipmentSlice.actions;

export default equipmentSlice.reducer;
