import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./slices";


export const store = configureStore({
    reducer: rootReducer,
    // middleware: getDefaultMiddleware => getDefaultMiddleware({
    //     immutableCheck: false,
    //     serializableCheck: false,
    //     thunk: true,
    // }),
})

export type RootState = ReturnType<typeof store.getState>