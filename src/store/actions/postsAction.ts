import {Dispatch} from "redux";
import {PostsAction, PostsActionTypes} from "../types/postsReducer";
import {getPosts} from "../../featchers/post";

export const getPostsAction = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({type: PostsActionTypes.GET_POSTS})
            const posts = await getPosts()
            dispatch({type: PostsActionTypes.GET_POSTS_SUCCESS, payload: posts})
        } catch (e) {
            dispatch({type: PostsActionTypes.GET_POSTS_ERROR, payload: 'ERROR'})
        }
    }
}