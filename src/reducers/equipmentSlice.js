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
        currentEqType: '',
        lensBuild: {imgURL: 'lens'},
        cameraBuild: {imgURL: 'camera'},
        batteryBuild: {imgURL: 'battery'},
        mediaBuild: {imgURL: 'card'},
        gripBuild: {imgURL: 'grip'},
        aksBuild: []
    },
    reducers: {
        updateURL: (state, action) => {
            state.url = action.payload.url;
            state.currentEqType = action.payload.eq
        },
        addItem: (state, action) => {
            const objectType = {
                Lens: 'lensBuild',
                Camera: 'cameraBuild',
                Battery: 'batteryBuild',
                Media: 'mediaBuild',
                Grip: 'gripBuild',
                AKS: 'aksBuild',
            }

            //state[lensBuild] = lens{ title, price, link, imgURL}
            state[objectType[state.currentEqType]] = action.payload.data;
        }
    }
})

export const { updateURL, addItem } = equipmentSlice.actions

export default equipmentSlice.reducer;