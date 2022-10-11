import React, {useEffect, useState} from 'react';
import {IPosts} from "../../../../types/posts";
import {getPost} from "../../../../featchers/post";
import './Post.css'

type TProps = {
    postId: number;
}

//TODO: remove console.log
const Post = ({postId}: TProps) => {
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
        <div className='postContent'>
            <div className='postTitle'>{post.title}</div>
            <div className='postBody'>{post.body}</div>
        </div>
    );
};

export default Post;