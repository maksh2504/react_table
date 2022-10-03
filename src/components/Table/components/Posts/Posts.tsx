import React, {Component, useEffect, useRef, useState} from 'react';
import {IPosts} from "../../../../types/posts";
import postsData from '../../../../data/posts.json'
import Post from "./Post";
import {IUser} from "../../../../types/user";

type TProps = {
    userId: number;
}

const Posts = ({userId}: TProps) => {

    const [posts, setPosts] = useState([] as IPosts[])

    useEffect(() => {
        addPosts(postsData)
    }, [])

    // useEffect(() => {
    //     console.log(posts)
    // }, [posts])

    const addPosts = (postsData: any) => {
        postsData.forEach((post: any) => {
            setPosts( (prev) => ([ ...prev, post]) )
        })
    }

    return (
        <div>
            {
                posts.map(post => (
                    <Post post={post} key={post.id}/>
                ))
            }
        </div>
    );
};

export default Posts;
