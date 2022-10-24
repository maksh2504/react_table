import {combineReducers} from "redux";
import {nameReducer} from "./nameReducer";
import {usersReducer} from "./usersReducer";
import {store} from "../index";


export const rootReducer = combineReducers({
    userName: nameReducer,
    getUsers: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch