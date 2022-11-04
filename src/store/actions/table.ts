import {Dispatch} from "redux";
import {getUsersFetch} from "../../featchers/user";
import {getPostsFetch} from "../../featchers/post";
import {isLoadingPostsActions, isLoadingUsersActions, postsActions, usersActions} from "../slices/table";

export const getUsersAction = () => {
    const {getUsersSuccess, getUsersError} = usersActions
    const {startLoadingInfo, stopLoadingInfo} = isLoadingUsersActions

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
    const {getPostsSuccess, getPostsError} = postsActions
    const {startLoadingInfo, stopLoadingInfo} = isLoadingPostsActions


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