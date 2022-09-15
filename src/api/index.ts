import {IUser} from "../types/user";
import {IPosts} from "../types/posts";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getUsers: () => Promise<IUser[]> = () =>
    fetch(`${BASE_URL}/users`)
            .then(response => response.json())
            .then(data => data)

export const getPosts: (i: number) => Promise<IPosts[]> = (i: number) =>
    fetch(`${BASE_URL}/users/${i}/posts/`)
            .then(response => response.json())
            .then(data => data)
