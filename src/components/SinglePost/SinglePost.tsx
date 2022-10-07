import React from 'react';
import './SinglePost.css'
import Post from "./components/Post";
import Comments from "./components/Comments/Comments";
import './SinglePost.css'


type TProps = {
    postId: number;
}

const SinglePost = ({postId}: TProps) => {
    return (
        <div>
            <Post postId={postId}/>
            <Comments postId={postId}/>
        </div>
    );
};

export default SinglePost;