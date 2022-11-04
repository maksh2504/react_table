import {createSlice} from "@reduxjs/toolkit";
import {INameState} from "../types/nameReducer";

const initialState: INameState = {
    name: '',
}

export const name = createSlice({
    name: 'name',
    initialState,
    reducers: {
        newName: (state, action) => {
            state.name = action.payload;
        }
    }
})
