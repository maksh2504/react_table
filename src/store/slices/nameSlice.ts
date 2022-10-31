import {createSlice} from "@reduxjs/toolkit";
import {INameState} from "../types/nameReducer";

const initialState: INameState = {
    name: '',
}

export const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        addNewNameReducer: (state, action) => {
            state.name = action.payload;
        }
    }
})
