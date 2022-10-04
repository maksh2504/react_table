import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getUsers = () => {
    const users = axios.get(`${BASE_URL}/users`);
    return users;
}

export const getPosts = (userId: number) => {
    const posts = axios.get(`${BASE_URL}/users/${userId}/posts/`);
    return posts;
}
