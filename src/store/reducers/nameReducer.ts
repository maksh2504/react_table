import {NameAction, NameActionTypes} from "../types/nameReducer"

const initialState = ''

export const nameReducer = (state = initialState, action: NameAction) => {
    console.log(action.payload)
    switch (action.type) {
        case NameActionTypes.NEW_NAME:
            return action.payload
        default:
            return state
    }
}