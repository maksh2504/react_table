import {createSlice} from "@reduxjs/toolkit";

export const { reducer: isLoading, actions: isLoadingActions } = createSlice({
    name: 'table/isLoading',
    initialState: false as boolean,
    reducers: {
        startLoadingPaymentInfo: () => true,
        stopLoadingPaymentInfo: () => false,
    },
});