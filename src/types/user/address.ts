import {TGeo} from "./geo";

export interface IAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: TGeo;
}

export type TAddress = {
    address: IAddress
}