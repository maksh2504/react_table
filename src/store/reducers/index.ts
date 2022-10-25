import {combineReducers} from "redux";
import {nameReducer} from "./nameReducer";
import {usersReducer} from "./usersReducer";
import {store} from "../index";
import {postsReducer} from "./postsReducer";


export const rootReducer = combineReducers({
    userName: nameReducer,
    getUsers: usersReducer,
    getPosts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch