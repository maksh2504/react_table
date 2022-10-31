import {createSlice} from "@reduxjs/toolkit";
import {IPostsState} from "../types/postsReducer";

const initialState : IPostsState = {
    posts: [],
    postsLoading: false,
    error: null,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: (state) => {
            state.postsLoading = true;
        },
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

