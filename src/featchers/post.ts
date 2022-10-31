import {api} from "../api/axiosconfig";
import {IComments} from "../types/comments";
import {IPosts} from "../types/posts";

export const getPosts1 = (userId: number) => api.get<IPosts[]>(`/users/${userId}/posts/`).then(({data}) => data)
export const getPostsFetch = () => api.get<IPosts[]>(`/posts/`).then(({data}) => data)

export const getPost = (postId: number) => api.get<IPosts>(`/posts/${postId}/`).then(({data}) => data)

export const getComments = (postId: number) => api.get<IComments[]>(`/posts/${postId}/comments/`).then(({data}) => data)
