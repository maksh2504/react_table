import {api} from "../api/axiosconfig";
import {IUser} from "../types/user";
import {IPosts} from "../types/posts";

export const getUsers = () => api.get<IUser[]>('/users/').then(({data}) => data)

export const getPosts = (userId: number) => api.get<IPosts[]>(`/users/${userId}/posts/`).then(({data}) => data)


