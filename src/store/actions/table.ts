import {Dispatch} from "redux";
import {getUsersFetch} from "../../featchers/user";
import {getPostsFetch} from "../../featchers/post";
import {tableActions} from "../slices/tableSlice";

export const getUsersAction = () => {
    const {getUsersSuccess, getUsersError} = tableActions.usersActions
    const {startLoadingInfo, stopLoadingInfo} = tableActions.isLoadingUsersActions

    return async (dispatch: Dispatch) => {
        try {
            dispatch(startLoadingInfo())
            const users = await getUsersFetch()
            dispatch(getUsersSuccess(users))
            dispatch(stopLoadingInfo())
        } catch (e) {
            dispatch(getUsersError('ERROR'))
        }
    }
}

export const getPostsAction = () => {
    const {getPostsSuccess, getPostsError} = tableActions.postsActions
    const {startLoadingInfo, stopLoadingInfo} = tableActions.isLoadingPostsActions


    return async (dispatch: Dispatch) => {
        try {
            dispatch(startLoadingInfo())
            const posts = await getPostsFetch()
            dispatch(getPostsSuccess(posts))
            dispatch(stopLoadingInfo())
        } catch (e) {
            dispatch(getPostsError('ERROR'))
        }
    }
}