import {RootState} from "../slices";

export const table = (state: RootState) => state.table
export const getUsers = (state: RootState) => state.table.users
export const getPosts = (state: RootState) => state.table.posts
