import React from 'react';
import {IPosts} from "../types/posts";

type TProps = {
    post: IPosts
}

const PrintPost = ({post}: TProps) => {
    return (
        <ul>
            <li>{post.title}</li>
        </ul>
    );
};

export default PrintPost;