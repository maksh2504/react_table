import React from 'react';
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