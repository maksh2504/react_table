import React from 'react';
import Post from "./Post";
import {useAppSelector} from "../../../../hooks/useAppSelector";

type TProps = {
    userId: number;
}

const PostsList = ({userId}: TProps) => {
    const {posts} = useAppSelector(state => state.posts)

    return (
        <div className='posts'>
            <ul>
                {
                    posts.map(post => (
                        post.userId === userId ?
                        <Post post={post} key={post.id}/> : <></>
                    ))
                }
            </ul>
        </div>
    );
};

export default PostsList;
