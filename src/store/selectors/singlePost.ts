import {RootState} from "../slices";

export const singlePost = (state: RootState) => state.singlePost
export const getPost = (state: RootState) => state.singlePost.post
export const getComments = (state: RootState) => state.singlePost.comments
