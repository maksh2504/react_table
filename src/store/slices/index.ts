import {combineReducers} from "redux";
import {store} from "../index";
import {nameSlice} from "./nameSlice";
import {table} from "./tableSlice";
import {singlePost} from "./singlePostSlice";
import {isLoading} from "./isLoading";


export const rootReducer = combineReducers({
    isLoading: isLoading,
    name: nameSlice.reducer,
    table: table,
    singlePost: singlePost,

})


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch