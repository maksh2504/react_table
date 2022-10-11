import {TGeo} from "./geo";

export type TAddress = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: TGeo;
}