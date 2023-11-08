import { createSlice } from '@reduxjs/toolkit';

export const equipmentSlice = createSlice({
    name: 'equip',
    initialState: {
        url: ''
    },
    reducers: {
        updateURL: (state, action) => {
            state.url = action.payload.url;
        },
    }
})

export const { updateURL } = equipmentSlice.actions

export default equipmentSlice.reducer;