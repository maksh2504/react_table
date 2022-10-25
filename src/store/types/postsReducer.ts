import {IPosts} from "../../types/posts";

export interface IPostsState {
    posts: IPosts[];
    postsLoading: boolean,
    error: null | string,
}

export enum PostsActionTypes {
    GET_POSTS = 'postsReducer/GET_POSTS',
    GET_POSTS_SUCCESS = 'postsReducer/GET_POSTS_SUCCESS',
    GET_POSTS_ERROR = 'postsReducer/GET_POSTS_ERROR',
}

interface GetPostsAction {
    type: PostsActionTypes.GET_POSTS;
}

interface GetPostsSuccessAction {
    type: PostsActionTypes.GET_POSTS_SUCCESS;
    payload: IPosts[];
}

interface GetPostsErrorAction {
    type: PostsActionTypes.GET_POSTS_ERROR;
    payload: string;
}

export type PostsAction = GetPostsAction | GetPostsSuccessAction | GetPostsErrorAction
