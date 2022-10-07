export interface IPosts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type TPost = {
    post: IPosts
}