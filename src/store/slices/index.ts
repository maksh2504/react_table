import {combineReducers} from "redux";
import {store} from "../index";
import {nameSlice} from "./nameSlice";
import {usersSlice} from "./usersSlice";
import {postsSlice} from "./postsSlice";


export const rootReducer = combineReducers({
    name: nameSlice.reducer,
    users: usersSlice.reducer,
    posts: postsSlice.reducer,

})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch