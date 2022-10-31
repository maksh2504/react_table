import {api} from "../api/axiosconfig";
import {IUser} from "../types/user/user";

export const getUsersFetch = () => api.get<IUser[]>('/users/').then(({data}) => data)
