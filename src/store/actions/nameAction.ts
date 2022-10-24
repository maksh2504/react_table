import {NameActionTypes} from "../types/nameReducer";

export const newNameAction = (payload: string) => {
     return {type: NameActionTypes.NEW_NAME, payload: payload}
}