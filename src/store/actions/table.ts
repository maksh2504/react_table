import {Dispatch} from "redux";
import {getUsersFetch} from "../../featchers/user";
import {getPostsFetch} from "../../featchers/post";
import {tableActions} from "../slices/tableSlice";

export const getUsersAction = () => {
    const {getUsersSuccess, getUsersError} = tableActions.usersActions

    return async (dispatch: Dispatch) => {
        try {
            const users = await getUsersFetch()
            dispatch(getUsersSuccess(users))
        } catch (e) {
            dispatch(getUsersError('ERROR'))
        }
    }
}

export const getPostsAction = () => {
    const {getPostsSuccess, getPostsError} = tableActions.postsActions

    return async (dispatch: Dispatch) => {
        try {
            const posts = await getPostsFetch()
            dispatch(getPostsSuccess(posts))
        } catch (e) {
            dispatch(getPostsError('ERROR'))
        }
    }
}