import {combineReducers} from "redux";
import {nameReducer} from "./nameReducer";


export const rootReducer = combineReducers({
    userName: nameReducer,
})

export type RootState = ReturnType<typeof rootReducer>