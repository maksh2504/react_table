import React, {useEffect, useState} from 'react';
import {IPosts} from "../../types/posts";
import {getPost} from "../../featchers/post";
import './SinglePost.css'
import {useParams} from "react-router-dom";
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