import { createSlice } from '@reduxjs/toolkit';

export const dynamicSlice = createSlice({
    name: 'dynamic',
    initialState: {
        open: true,
    },
    reducers: {
    openDropdown: (state, action) => {
            state.open = !state.open
        }
    }
})

export const { openDropdown } = dynamicSlice.actions

export default dynamicSlice.reducer;