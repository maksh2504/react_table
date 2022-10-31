import {IPosts} from "../../types/posts";

export interface IPostsState {
    posts: IPosts[];
    postsLoading: boolean,
    error: null | string,
}
