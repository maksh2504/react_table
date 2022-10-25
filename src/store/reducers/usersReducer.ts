import {IUsersState, UsersAction, UsersActionTypes} from "../types/usersReducer";

const initialState : IUsersState = {
    users: [],
    usersLoading: false,
    error: null,
}

export const usersReducer = (state = initialState, action: UsersAction) : IUsersState => {
    switch (action.type) {
        case UsersActionTypes.GET_USERS:
            return {users: [], usersLoading: true, error: null}
        case UsersActionTypes.GET_USERS_SUCCESS:
            return {users: action.payload, usersLoading: false, error: null}
        case UsersActionTypes.GET_USERS_ERROR:
            return {users: [], usersLoading: false, error: 'ERROR'}
        default:
            return state
    }
}