import React, {useEffect, useState} from 'react';
import {IPosts} from "../../../../types/posts";
import {getPost} from "../../../../featchers/post";
import './Post.css'
import Loader from "../../../Loader/Loader";

type TProps = {
    postId: number;
}

const Post = ({postId}: TProps) => {
    const [post, setPost] = useState({} as IPosts)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPost(postId).then(
            post => setPost(post)
        ).finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {
                loading ? (
                    <Loader/>
                ) : (
                    <div className='postContent'>
                        <div className='postTitle'>{post.title}</div>
                        <div className='postBody'>{post.body}</div>
                    </div>
                )
            }
        </div>
    );
};

export default Post;