import {combineReducers, createSlice} from "@reduxjs/toolkit";
import {IUsersState} from "../types/Table/usersReducer";
import {IPostsState} from "../types/Table/postsReducer";
import {
    isLoading,
    isLoadingActions,
} from "./isLoading";

export const { reducer: isLoadingUsers, actions: isLoadingUsersActions } = createSlice({
    name: 'table/isLoadingUsers',
    initialState: false as boolean,
    reducers: {
        startLoadingInfo: () => true,
        stopLoadingInfo: () => false,
    },
});

export const { reducer: isLoadingPosts, actions: isLoadingPostsActions } = createSlice({
    name: 'table/isLoadingPosts',
    initialState: false as boolean,
    reducers: {
        startLoadingInfo: () => true,
        stopLoadingInfo: () => false,
    },
});

export const { reducer: users, actions: usersActions } = createSlice({
    name: 'table/users',
    initialState: {} as IUsersState,
    reducers: {
        getUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.usersLoading = false;
            state.error = null;
        },
        getUsersError: (state, action) => {
            state.users = [];
            state.usersLoading = false;
            state.error = action.payload;
        }
    }
})

export const { reducer: posts, actions: postsActions } = createSlice({
    name: 'table/posts',
    initialState: {} as IPostsState,
    reducers: {
        getPostsSuccess: (state, action) => {
            state.posts = action.payload;
            state.postsLoading = false;
            state.error = null;
        },
        getPostsError: (state, action) => {
            state.posts = [];
            state.postsLoading = false;
            state.error = action.payload;
        }
    }
})


export const table = combineReducers({ isLoadingUsers, users, isLoadingPosts, posts })
export const tableActions = { isLoadingUsersActions, usersActions, isLoadingPostsActions, postsActions }

