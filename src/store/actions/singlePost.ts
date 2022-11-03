import {Dispatch} from "redux";
import {getCommentsFetch, getPostFetch} from "../../featchers/post";
import {singlePostActions} from "../slices/singlePostSlice";


export const getSinglePostsAction = (postId: number) => {
    const { getSinglePostSuccess, getSinglePostError } = singlePostActions.postActions
    const { startLoadingInfo, stopLoadingInfo } = singlePostActions.isLoadingPostActions

    return async (dispatch: Dispatch) => {
        try {
            dispatch(startLoadingInfo())
            const post = await getPostFetch(postId)
            dispatch(getSinglePostSuccess(post))
            dispatch(stopLoadingInfo())
        } catch (e) {
            dispatch(getSinglePostError('ERROR'))
        }
    }
}

export const getCommentsAction = (postId: number) => {
    const { getCommentsSuccess, getCommentsError } = singlePostActions.commentsActions
    const { startLoadingInfo, stopLoadingInfo } = singlePostActions.isLoadingCommentsActions

    return async (dispatch: Dispatch) => {
        try {
            dispatch(startLoadingInfo())
            const comments = await getCommentsFetch(postId)
            dispatch(getCommentsSuccess(comments))
            dispatch(stopLoadingInfo())
        } catch (e) {
            dispatch(getCommentsError('ERROR'))
        }
    }
}