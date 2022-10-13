import React, {useEffect, useState} from 'react';
import {getComments} from "../../../../featchers/post";
import Comment from "./Comment";
import {IComments} from "../../../../types/comments";
import './CommentsList.css'
import Loader from "../../../Loader/Loader";
import Post from "../../../Table/components/Posts/Post";

type TProps = {
    postId: number;
}

const CommentsList = ({postId}: TProps) => {
    const [comments, setComments] = useState([] as IComments[])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getComments(postId).then(
            comments => setComments(comments)
        ).finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {
                loading ? (
                    <Loader/>
                ) : (
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
                )
            }
        </div>
    );
};

export default CommentsList;