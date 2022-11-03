import {createSlice} from "@reduxjs/toolkit";

export const { reducer: isLoading, actions: isLoadingActions } = createSlice({
    name: 'isLoading',
    initialState: false as boolean,
    reducers: {
        startLoadingInfo: () => true,
        stopLoadingInfo: () => false,
    },
});

// export const { reducer: isLoadingUsers, actions: isLoadingUsersActions } = createSlice({
//     name: 'table/isLoadingUsers',
//     initialState: false as boolean,
//     reducers: {
//         startLoadingInfo: () => true,
//         stopLoadingInfo: () => false,
//     },
// });
//
// export const { reducer: isLoadingPosts, actions: isLoadingPostsActions } = createSlice({
//     name: 'table/isLoadingPosts',
//     initialState: false as boolean,
//     reducers: {
//         startLoadingInfo: () => true,
//         stopLoadingInfo: () => false,
//     },
// });


// export const { reducer: isLoadingPost, actions: isLoadingPostActions } = createSlice({
//     name: 'singlePost/isLoadingPost',
//     initialState: false as boolean,
//     reducers: {
//         startLoadingInfo: () => true,
//         stopLoadingInfo: () => false,
//     },
// });
//
// export const { reducer: isLoadingComments, actions: isLoadingCommentsActions } = createSlice({
//     name: 'singlePost/isLoadingComments',
//     initialState: false as boolean,
//     reducers: {
//         startLoadingInfo: () => true,
//         stopLoadingInfo: () => false,
//     },
// });