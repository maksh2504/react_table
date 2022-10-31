import {createSlice} from "@reduxjs/toolkit";
import {ISinglePostState} from "../../types/SinglePost/singlePostSlice";
import {IPosts} from "../../../types/posts";

const initialState : ISinglePostState = {
    singlePost: {} as IPosts,
    singlePostLoading: false,
    error: null,
}

export const singlePostSlice = createSlice({
    name: 'singlePost',
    initialState,
    reducers: {
        getSinglePost: (state) => {
            state.singlePostLoading = true;
        },
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

