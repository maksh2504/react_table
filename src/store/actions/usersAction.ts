import {Dispatch} from "redux";
import {getUsersFetch} from "../../featchers/user";
import {usersSlice} from "../slices/usersSlice";

export const getUsersAction = () => {
    const {getUsers, getUsersSuccess, getUsersError} = usersSlice.actions
    return async (dispatch: Dispatch) => {
        try {
            dispatch(getUsers())
            const users = await getUsersFetch()
            console.log(users)
            dispatch(getUsersSuccess(users))
        } catch (e) {
            dispatch(getUsersError('ERROR'))
        }
    }
}
