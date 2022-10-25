import {NameAction, NameActionTypes} from "../types/nameReducer"

const initialState = ''

export const nameReducer = (state = initialState, action: NameAction) => {
    switch (action.type) {
        case NameActionTypes.NEW_NAME:
            return action.payload
        default:
            return state
    }
}