import {baseTableUrl} from "../api/axiosconfig";
import {IUser} from "../types/user";
import {IPosts} from "../types/posts";

export const getUsers = () => baseTableUrl.get<IUser[]>('/users/').then(({data}) => data)

export const getPosts = (userId: number) => baseTableUrl.get<IPosts[]>(`/users/${userId}/posts/`).then(({data}) => data)
