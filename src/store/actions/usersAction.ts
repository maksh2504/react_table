import {Dispatch} from "redux";
import {UsersAction, UsersActionTypes} from "../types/usersReducer";
import {getUsers} from "../../featchers/user";

export const getUsersAction = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.GET_USERS})
            const users = await getUsers()
            dispatch({type: UsersActionTypes.GET_USERS_SUCCESS, payload: users})
        } catch (e) {
            dispatch({type: UsersActionTypes.GET_USERS_ERROR, payload: 'ERROR'})
        }
    }
}