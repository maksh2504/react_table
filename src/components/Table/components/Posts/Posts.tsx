import React, { useEffect, useState } from 'react';
import {IPosts} from "../../../../types/posts";
import Post from "./Post";
import {getPosts} from "../../../../featchers/post";

type TProps = {
    userId: number;
}

const Posts = ({userId}: TProps) => {

    const [posts, setPosts] = useState([] as IPosts[])

    useEffect(() => {
        getPosts(userId).then(
            posts => setPosts(posts)
        )
    }, [])

    return (
        <div className='posts'>
            <ul>
                {
                    posts.map(post => (
                        <Post post={post} key={post.id}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default Posts;
