import {combineReducers} from "redux";
import {store} from "../index";
import {nameSlice} from "./nameSlice";
import {table} from "./tableSlice";
import {singlePostSlice} from "./SinglePost/singlePostSlice";
import {commentsSlice} from "./SinglePost/commentsSlice";
import {isLoading} from "./isLoading";


export const rootReducer = combineReducers({
    isLoading: isLoading,
    name: nameSlice.reducer,
    table: table,
    singlePost: singlePostSlice.reducer,
    comments: commentsSlice.reducer,

})


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch