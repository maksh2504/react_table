import {IUsersState, UsersAction, UsersActionTypes} from "../types/usersReducer";

const initialState : IUsersState = {
    users: [],
    loading: false,
    error: null,
}

export const usersReducer = (state = initialState, action: UsersAction) : IUsersState => {
    switch (action.type) {
        case UsersActionTypes.GET_USERS:
            return {users: [], loading: true, error: null}
        case UsersActionTypes.GET_USERS_SUCCESS:
            console.log(action.payload)
            return {users: action.payload, loading: false, error: null}
        case UsersActionTypes.GET_USERS_ERROR:
            return {users: [], loading: false, error: 'ERROR'}
        default:
            return state
    }
}