import React, { useEffect, useState } from 'react';
import {IPosts} from "../../../../types/posts";
import Post from "./Post";
import {getPosts} from "../../../../featchers/post";
import Loader from "../../../Loader/Loader";
import Header from "../Header";
import Row from "../Row";

type TProps = {
    userId: number;
}

const PostsList = ({userId}: TProps) => {

    const [posts, setPosts] = useState([] as IPosts[])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPosts(userId).then(
            posts => setPosts(posts)
        ).finally(() => setLoading(false))
    }, [])

    return (
        <div className='posts'>
            <ul>
                {
                    loading ? (
                        <Loader/>
                    ) : (
                        posts.map(post => (
                            <Post post={post} key={post.id}/>
                        ))
                    )
                }
            </ul>
        </div>
    );
};

export default PostsList;
