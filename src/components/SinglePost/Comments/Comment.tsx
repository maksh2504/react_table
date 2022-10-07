import React from 'react';
import {TComment} from "../../../types/comments";

const Comment = ({comment}: TComment) => {
    return (
        <div>
            <div>{comment.id}</div>
            <div>{comment.postId}</div>
            <div>{comment.name}</div>
            <div>{comment.email}</div>
            <div>{comment.body}</div>
        </div>
    );
};

export default Comment;