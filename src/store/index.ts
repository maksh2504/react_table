import {applyMiddleware, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk))

// export const store = configureStore(rootReducer, applyMiddleware(thunk))