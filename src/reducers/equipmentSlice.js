import { createSlice } from '@reduxjs/toolkit';

export const equipmentSlice = createSlice({
    name: 'equip',
    initialState: {
        url: '',
        currentEqType: '',
        lensBuild: {},
        cameraBuild: {},
        batteryBuild: {},
        mediaBuild: {},
        gripBuild: {},
        aksBuild: []
    },
    reducers: {
        updateURL: (state, action) => {
            state.url = action.payload.url;
            state.currentEqType = action.payload.eq
        },
        addItem: (state, action) => {
            //object will match 'currentEqType' to its proper state objecty
        }
    }
})

export const { updateURL } = equipmentSlice.actions

export default equipmentSlice.reducer;