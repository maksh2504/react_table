import {Dispatch} from "redux";
import {getCommentsFetch, getPostFetch} from "../../featchers/post";
import {
    commentsActions,
    isLoadingCommentsActions,
    isLoadingPostActions,
    postActions
} from "../slices/singlePost";


export const getSinglePostsAction = (postId: number) => {
    const { getSinglePostSuccess, getSinglePostError } = postActions
    const { startLoadingInfo, stopLoadingInfo } = isLoadingPostActions

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
    const { getCommentsSuccess, getCommentsError } = commentsActions
    const { startLoadingInfo, stopLoadingInfo } = isLoadingCommentsActions

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