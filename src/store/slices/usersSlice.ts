import {createSlice} from "@reduxjs/toolkit";
import {IUsersState} from "../types/usersReducer";

const initialState : IUsersState = {
    users: [],
    usersLoading: false,
    error: null,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers: (state) => {
            state.usersLoading = true;
        },
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

