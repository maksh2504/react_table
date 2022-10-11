import React from 'react';
import './components/Post/Post.css'
import Post from "./components/Post/Post";
import Comments from "./components/Comments/Comments";
import './SinglePost.css'

type TProps = {
    postId: number;
}

const SinglePost = ({postId}: TProps) => {
    return (
        <div className='singlePost'>
            <Post postId={postId}/>
            <Comments postId={postId}/>
        </div>
    );
};

export default SinglePost;