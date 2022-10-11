import React from 'react';
import {useParams} from "react-router-dom";
import SinglePost from "../../components/SinglePost/SinglePost";
import './Post.css'

const PostPage = () => {
    const {postId} = useParams()
    return (
        <div className='post'>
            <SinglePost postId={Number(postId)}/>
        </div>
    );
};

export default PostPage;