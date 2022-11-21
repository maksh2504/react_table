import React from 'react';
import Comment from "./Comment";
import './CommentsList.css'
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {getComments} from "../../../../store/selectors/singlePost";


const CommentsList = () => {
    const {comments} = useAppSelector(getComments)

    return (
        <div className='commentBlock'>
            <div style={{fontSize: '17px'}}>Comments:</div>
            <div className='comments'>
                {
                    comments?.map(comment => (
                        <Comment comment={comment} key={comment.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default CommentsList;
