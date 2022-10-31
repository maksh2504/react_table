import {Dispatch} from "redux";
import {getUsersFetch} from "../../../featchers/user";
import {usersSlice} from "../../slices/Table/usersSlice";
import {commentsSlice} from "../../slices/SinglePost/commentsSlice";
import {getCommentsFetch} from "../../../featchers/post";

export const getCommentsAction = (postId: number) => {
    const {getComments, getCommentsSuccess, getCommentsError} = commentsSlice.actions
    return async (dispatch: Dispatch) => {
        try {
            dispatch(getComments())
            const comments = await getCommentsFetch(postId)
            dispatch(getCommentsSuccess(comments))
        } catch (e) {
            dispatch(getCommentsError('ERROR'))
        }
    }
}
