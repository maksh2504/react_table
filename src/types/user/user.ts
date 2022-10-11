import {TAddress} from "./address";
import {TCompany} from "./company";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: TAddress;
    phone: string;
    website: string;
    company: TCompany;
}

export type TUser = {
    user: IUser;
}