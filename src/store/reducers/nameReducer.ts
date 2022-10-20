import {INameState, NameAction} from "../../types/store/nameReducer"

const initialState: INameState = {
    name: ''
}

export const nameReducer = (state = initialState, action: NameAction) : INameState => {
    switch (action.type) {
        case 'NEW_NAME':
            return {name: action.payload}
        default:
            return state
    }
}