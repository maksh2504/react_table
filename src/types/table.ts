import {IUser} from "../types/user";
import {IPosts} from "../types/posts"

//TODO: file is redundant
export interface ITable {
    users: IUser[];
    posts: IPosts[];
}