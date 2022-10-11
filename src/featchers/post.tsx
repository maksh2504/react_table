import {api} from "../api/axiosconfig";
import {IComments} from "../types/comments";
import {IPosts} from "../types/posts";

export const getPost = (postId: number) => api.get<IPosts>(`/posts/${postId}/`).then(({data}) => data)

export const getComments = (postId: number) => api.get<IComments[]>(`/posts/${postId}/comments/`).then(({data}) => data)

//TODO: rename file to post.ts