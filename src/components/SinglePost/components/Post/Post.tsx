import React from 'react';
import './Post.css'
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {getPost} from "../../../../store/selectors/getSinglePost";

const Post = () => {
    const {singlePost} = useAppSelector(getPost)

    return (
        <div className='postContent'>
            <div className='postTitle'>{singlePost?.title}</div>
            <div className='postBody'>{singlePost?.body}</div>
        </div>
    );
};

export default Post;