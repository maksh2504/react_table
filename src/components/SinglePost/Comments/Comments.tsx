import React, {useEffect, useState} from 'react';
import {TPost} from "../../../types/posts";
import {getComments} from "../../../featchers/post";
import Comment from "./Comment";
import {IComments} from "../../../types/comments";

type TProps = {
    postId: number;
}

const Comments = ({postId}: TProps) => {
    const [comments, setComments] = useState([] as IComments[])

    useEffect(() => {
        getComments(postId).then(
            comments => setComments(comments)
        )
    }, [])

    // useEffect(() => {
    //     console.log(comments)
    // }, [comments])

    return (
        <div>
            {
                comments.map(comment => (
                    <Comment comment={comment} key={comment.id}/>
                ))
            }
        </div>
    );
};

export default Comments;