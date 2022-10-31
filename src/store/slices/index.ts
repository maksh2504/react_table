import {combineReducers} from "redux";
import {store} from "../index";
import {nameSlice} from "./nameSlice";
import {usersSlice} from "./Table/usersSlice";
import {postsSlice} from "./Table/postsSlice";
import {singlePostSlice} from "./SinglePost/singlePostSlice";
import {commentsSlice} from "./SinglePost/commentsSlice";


export const rootReducer = combineReducers({
    name: nameSlice.reducer,
    users: usersSlice.reducer,
    posts: postsSlice.reducer,
    singlePost: singlePostSlice.reducer,
    comments: commentsSlice.reducer,

})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch