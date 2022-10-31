import {Dispatch} from "redux";
import {getPostsFetch} from "../../featchers/post";
import {postsSlice} from "../slices/postsSlice";

export const getPostsAction = () => {
    const {getPosts, getPostsSuccess, getPostsError} = postsSlice.actions


    return async (dispatch: Dispatch) => {
        try {
            dispatch(getPosts())
            const posts = await getPostsFetch()
            dispatch(getPostsSuccess(posts))
        } catch (e) {
            dispatch(getPostsError('ERROR'))
        }
    }
}