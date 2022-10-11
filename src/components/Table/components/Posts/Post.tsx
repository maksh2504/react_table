import React from 'react';
import {IPosts, TPost} from "../../../../types/posts";
import {Link} from "react-router-dom";

type TProps = {
    post: IPosts
}

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