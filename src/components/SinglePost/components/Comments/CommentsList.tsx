import React from 'react';
import Comment from "./Comment";
import './CommentsList.css'
import {useAppSelector} from "../../../../hooks/useAppSelector";


const CommentsList = () => {
    const {comments} = useAppSelector(state => state.comments)

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