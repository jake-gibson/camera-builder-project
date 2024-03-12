import { createSlice } from '@reduxjs/toolkit';

// import lens from '../assets/lens.PNG'
// import camera from '../assets/camera.PNG'
// import battery from '../assets/battery.PNG'
// import card from '../assets/card.PNG'
// import grip from '../assets/tripod.PNG'
// import monitor from '../assets/monitor.PNG'
// import videofeed from '../assets/videofeed.PNG'
// import mic from '../assets/microphone.PNG'
// import cables from '../assets/cables.PNG'

export const equipmentSlice = createSlice({
  name: 'equip',
  initialState: {
    url: '',
    totalCost: 0,
    currentEqType: '',
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
          ...action.payload.data,
          quantity: 0,
          loaded: true,
        };
        state.totalCost =
          state.lensBuild.price +
          state.cameraBuild.price +
          state.batteryBuild.price +
          state.mediaBuild.price +
          state.gripBuild.price +
          state.aksBuild.price;
      }
    },
    loadOldBuild: (state, action) => {
      // console.log(action.payload.target)
      // console.log(action.payload.data)

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
        state.lensBuild.price +
        state.cameraBuild.price +
        state.batteryBuild.price +
        state.mediaBuild.price +
        state.gripBuild.price +
        state.aksBuild.price;
    },
    increment: (state, action) => {
      const eqType = action.payload.type;

      state[eqType].quantity++;
    },
    decrement: (state, action) => {
      const eqType = action.payload.type;

      if (state[eqType].quantity !== 0) {
        state[eqType].quantity--;
      }
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
} = equipmentSlice.actions;

export default equipmentSlice.reducer;
