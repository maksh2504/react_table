import {IUser} from "../../../types/user/user";

export interface IUsersState {
    users: IUser[];
    usersLoading: boolean;
    error: null | string;
}