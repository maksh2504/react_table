import {createSlice} from "@reduxjs/toolkit";

export const { reducer: isLoading, actions: isLoadingActions } = createSlice({
    name: 'isLoading',
    initialState: false as boolean,
    reducers: {
        startLoadingInfo: () => true,
        stopLoadingInfo: () => false,
    },
});