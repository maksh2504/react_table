import {api} from "../api/axiosconfig";
import {IUser} from "../types/user";

export const getUsers = () => api.get<IUser[]>('/users/').then(({data}) => data)
