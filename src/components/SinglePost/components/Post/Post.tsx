import React from 'react';
import './Post.css'
import {useAppSelector} from "../../../../hooks/useAppSelector";

const Post = () => {
    const {singlePost} = useAppSelector(state => state.singlePost)

    return (
        <div className='postContent'>
            <div className='postTitle'>{singlePost.title}</div>
            <div className='postBody'>{singlePost.body}</div>
        </div>
    );
};

export default Post;