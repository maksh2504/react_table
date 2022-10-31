import {createSlice} from "@reduxjs/toolkit";
import {ICommentsState} from "../../types/SinglePost/commentsSlice";

const initialState : ICommentsState = {
    comments: [],
    commentsLoading: false,
    error: null,
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        getComments: (state) => {
            state.commentsLoading = true;
        },
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

