import React from 'react';
import {getComments} from "../featchers/post";
import {TPost} from "../types/posts";
import Comments from "../components/SinglePost/components/Comments/Comments";
import {useParams} from "react-router-dom";
import SinglePost from "../components/SinglePost/SinglePost";

const Post = () => {
    const {postId} = useParams()
    return (
        <div>
            <SinglePost postId={Number(postId)}/>
        </div>
    );
};

export default Post;