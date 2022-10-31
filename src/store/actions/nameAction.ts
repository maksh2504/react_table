import {Dispatch} from "redux";
import {nameSlice} from "../slices/nameSlice";

export const newNameAction = (name: string) => {
     const {newName} = nameSlice.actions
     return 0
     // return async (dispatch: Dispatch) => {
     //      dispatch(newName(name))
     // }
}