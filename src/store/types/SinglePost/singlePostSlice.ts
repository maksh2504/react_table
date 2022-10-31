import {IPosts} from "../../../types/posts";


export interface ISinglePostState {
    singlePost: IPosts;
    singlePostLoading: boolean;
    error: null | string;
}