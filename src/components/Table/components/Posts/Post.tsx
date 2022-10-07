import React from 'react';
import {IPosts, TPost} from "../../../../types/posts";
import {Link} from "react-router-dom";

type TProps = {
    post: IPosts
}

const Post = ({post}: TPost) => {
    return (
        <ul>
            <li>
                <Link to={`/post/${post.id}`}>
                    {post.title}
                </Link>
            </li>
        </ul>
    );
};

export default Post;