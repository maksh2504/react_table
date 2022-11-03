import {combineReducers, createSlice} from "@reduxjs/toolkit";
import {ISinglePostState} from "../types/SinglePost/singlePostSlice";
import {IPosts} from "../../types/posts";
import {ICommentsState} from "../types/SinglePost/commentsSlice";
import {
    isLoading,
    isLoadingActions,
} from "./isLoading";

export const { reducer: isLoadingPost, actions: isLoadingPostActions } = createSlice({
    name: 'singlePost/isLoadingPost',
    initialState: false as boolean,
    reducers: {
        startLoadingInfo: () => true,
        stopLoadingInfo: () => false,
    },
});

export const { reducer: isLoadingComments, actions: isLoadingCommentsActions } = createSlice({
    name: 'singlePost/isLoadingComments',
    initialState: false as boolean,
    reducers: {
        startLoadingInfo: () => true,
        stopLoadingInfo: () => false,
    },
});

export const {reducer: post, actions: postActions} = createSlice({
    name: 'singlePost/post',
    initialState: {} as ISinglePostState,
    reducers: {
        getSinglePostSuccess: (state, action) => {
            state.singlePost = action.payload;
            state.singlePostLoading = false;
            state.error = null;
        },
        getSinglePostError: (state, action) => {
            state.singlePost = {} as IPosts;
            state.singlePostLoading = false;
            state.error = action.payload;
        }
    }
})

export const {reducer: comments, actions: commentsActions} = createSlice({
    name: 'singlePost/comments',
    initialState: {} as ICommentsState,
    reducers: {
        getCommentsSuccess: (state, action) => {
            state.comments = action.payload;
            state.commentsLoading = false;
            state.error = null;
        },
        getCommentsError: (state, action) => {
            state.comments = [];
            state.commentsLoading = false;
            state.error = action.payload;
        }
    }
})

export const singlePost = combineReducers({ isLoadingPost, post, isLoadingComments, comments })
export const singlePostActions = { isLoadingPostActions, postActions, isLoadingCommentsActions, commentsActions }
