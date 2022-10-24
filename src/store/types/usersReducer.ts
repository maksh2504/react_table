import {IUser} from "../../types/user/user";

export interface IUsersState {
    users: IUser[];
    loading: boolean,
    error: null | string,
}

export enum UsersActionTypes {
    GET_USERS = 'usersReducer/NEW_NAME',
    GET_USERS_SUCCESS = 'usersReducer/GET_USERS_SUCCESS',
    GET_USERS_ERROR = 'usersReducer/GET_USERS_ERROR',
}

interface GetUsersAction {
    type: UsersActionTypes.GET_USERS;
}

interface GetUsersSuccessAction {
    type: UsersActionTypes.GET_USERS_SUCCESS;
    payload: IUser[];
}

interface GetUsersErrorAction {
    type: UsersActionTypes.GET_USERS_ERROR;
    payload: string;
}

export type UsersAction = GetUsersAction | GetUsersSuccessAction | GetUsersErrorAction
