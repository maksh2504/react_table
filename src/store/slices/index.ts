import {combineReducers} from "redux";
import {store} from "../index";
import {name} from "./name";
import {table} from "./table";
import {singlePost} from "./singlePost";


export const rootReducer = combineReducers({
    name: name.reducer,
    table: table,
    singlePost: singlePost,

})


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch