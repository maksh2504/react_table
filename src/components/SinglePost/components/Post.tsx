import React, {useEffect, useState} from 'react';
import {IPosts} from "../../../types/posts";
import {getPost} from "../../../featchers/post";

type TProps = {
    postId: number;
}

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
        <div className='singlePost'>
            <div className='title'>{post.id}. {post.title}</div>
            <div className='body'>{post.body}</div>
        </div>
    );
};

export default Post;