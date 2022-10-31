import {Dispatch} from "redux";
import {getPostFetch} from "../../../featchers/post";
import {singlePostSlice} from "../../slices/SinglePost/singlePostSlice";


export const getSinglePostsAction = (postId: number) => {
    const {getSinglePost, getSinglePostSuccess, getSinglePostError} = singlePostSlice.actions

    return async (dispatch: Dispatch) => {
        try {
            dispatch(getSinglePost())
            const post = await getPostFetch(postId)
            dispatch(getSinglePostSuccess(post))
        } catch (e) {
            dispatch(getSinglePostError('ERROR'))
        }
    }
}