import axios from "axios";

export const baseTableUrl = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
