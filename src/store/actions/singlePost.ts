import {Dispatch} from "redux";
import {getCommentsFetch, getPostFetch} from "../../featchers/post";
import {singlePostActions} from "../slices/singlePostSlice";


export const getSinglePostsAction = (postId: number) => {
    const { getSinglePostSuccess, getSinglePostError } = singlePostActions.postActions

    return async (dispatch: Dispatch) => {
        try {
            const post = await getPostFetch(postId)
            dispatch(getSinglePostSuccess(post))
        } catch (e) {
            dispatch(getSinglePostError('ERROR'))
        }
    }
}

export const getCommentsAction = (postId: number) => {
    const { getCommentsSuccess, getCommentsError } = singlePostActions.commentsActions
    return async (dispatch: Dispatch) => {
        try {
            const comments = await getCommentsFetch(postId)
            dispatch(getCommentsSuccess(comments))
        } catch (e) {
            dispatch(getCommentsError('ERROR'))
        }
    }
}