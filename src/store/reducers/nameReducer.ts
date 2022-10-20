import {INameState, NameAction, NameActionTypes} from "../types/nameReducer"

const initialState: INameState = {
    name: ''
}

export const nameReducer = (state = initialState, action: NameAction) : INameState => {
    console.log(action.payload)
    switch (action.type) {
        case NameActionTypes.NEW_NAME:
            return {name: action.payload}
        default:
            return state
    }
}