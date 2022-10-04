import React, { useEffect, useState } from 'react';
import {IPosts} from "../../../../types/posts";
import Post from "./Post";
import {getPosts} from "../../../../featchers/table";

type TProps = {
    userId: number;
}

const Posts = ({userId}: TProps) => {

    const [posts, setPosts] = useState([] as IPosts[])

    useEffect(() => {
        getPosts(userId).then(
            posts => setPosts(posts.data)
        )
    }, [])

    // useEffect(() => {
    //     console.log(posts)
    // }, [posts])

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
