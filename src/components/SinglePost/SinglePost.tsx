import React, {useEffect, useState} from 'react';
import {IPosts} from "../../types/posts";
import {getPost} from "../../featchers/post";

type TProps = {
    postId: number;
}

const SinglePost = ({postId}: TProps) => {
    const [post, setPost] = useState({} as IPosts)

    useEffect(() => {
        getPost(postId).then(
            post => setPost(post)
        )
    }, [])

    // useEffect(() => {
    //     console.log(post)
    // }, [post])

    return (
        <div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default SinglePost;