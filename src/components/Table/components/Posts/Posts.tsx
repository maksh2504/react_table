import React, { useEffect, useState } from 'react';
import {IPosts} from "../../../../types/posts";
import Post from "./Post";
import axios from "axios";

type TProps = {
    userId: number;
}

const Posts = ({userId}: TProps) => {

    const [posts, setPosts] = useState([] as IPosts[])

    useEffect(() => {
        getPosts()
    }, [])

    // useEffect(() => {
    //     console.log(posts)
    // }, [posts])

    const getPosts = async () => {
        const posts = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts/`)
        console.log(posts.data)
        setPosts(posts.data)
    }

    // const addPosts = (postsData: any) => {
    //     postsData.forEach((post: any) => {
    //         setPosts( (prev) => ([ ...prev, post]) )
    //     })
    // }

    return (
        <div>
            {
                posts.map(post => (
                    <Post post={post} key={post.id}/>
                ))
            }
        </div>
    );
};

export default Posts;
