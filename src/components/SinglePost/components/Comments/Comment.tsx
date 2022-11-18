import React from 'react';
import {TComment} from "../../../../types/comments";
import './Comment.css'
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

const Comment = ({comment}: TComment) => {
    return (
        <div className='comment'>
            <Card title={comment.name} bordered={false} >
                <p>{comment.body}</p>
                <Meta description={comment.email}/>
            </Card>
        </div>
    );
};

export default Comment;
