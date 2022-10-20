export interface INameState {
    name: string;
}

export enum NameActionTypes {
    NEW_NAME = 'NEW_NAME',
}

interface NewNameAction {
    type: NameActionTypes.NEW_NAME;
    payload: string;
}

interface DefaultAction {
    type: string;
    payload: string;
}

export type NameAction = NewNameAction | DefaultAction
