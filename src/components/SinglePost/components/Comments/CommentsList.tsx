import React, {useEffect, useState} from 'react';
import {getComments} from "../../../../featchers/post";
import Comment from "./Comment";
import {IComments} from "../../../../types/comments";
import './CommentsList.css'

type TProps = {
    postId: number;
}

const CommentsList = ({postId}: TProps) => {
    const [comments, setComments] = useState([] as IComments[])

    useEffect(() => {
        getComments(postId).then(
            comments => setComments(comments)
        )
    }, [])

    return (
        <div className='commentBlock'>
            <div>COMMENTS:</div>
            <div className='comments'>
                {
                    comments.map(comment => (
                        <Comment comment={comment} key={comment.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default CommentsList;