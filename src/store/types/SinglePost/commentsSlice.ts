import {IComments} from "../../../types/comments";

export interface ICommentsState {
    comments: IComments[];
    commentsLoading: boolean;
    error: null | string;
}