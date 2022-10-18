import React from 'react';
import {TPost} from "../../../../types/posts";
import {Link} from "react-router-dom";

const Post = ({post}: TPost) => {
    return (
        <li>
            <Link to={`/post/${post.id}`}>
                {post.title}
            </Link>
        </li>
    );
};

export default Post;