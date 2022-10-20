import React from 'react';
import './components/Post/Post.css'
import Post from "./components/Post/Post";
import CommentsList from "./components/Comments/CommentsList";
import './SinglePost.css'

type TProps = {
    postId: number;
}

const SinglePost = ({postId}: TProps) => {
    return (
        <div className='singlePost'>
            <Post postId={postId}/>
            <CommentsList postId={postId}/>
        </div>
    );
};

export default SinglePost;