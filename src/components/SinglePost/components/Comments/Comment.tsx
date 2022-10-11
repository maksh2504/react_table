import React from 'react';
import {TComment} from "../../../../types/comments";
import './Comment.css'

const Comment = ({comment}: TComment) => {
    return (
        <div className='comment'>
            <div className='cName'>{comment.name}</div>
            {/*<div className='postId'>{comment.postId}</div>*/}
            <div className='cBody'>{comment.body}</div>
            <div className='cEmail'>{comment.email}</div>
        </div>
    );
};

export default Comment;