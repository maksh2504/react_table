import React, {useEffect} from 'react';
import './components/Post/Post.css'
import Post from "./components/Post/Post";
import CommentsList from "./components/Comments/CommentsList";
import './SinglePost.css'
import {useAppDispatch, useAppSelector} from "../../hooks/useAppSelector";
import {getSinglePostsAction} from "../../store/actions/SinglePost/singlePostAction";
import Loader from "../Loader/Loader";
import {getCommentsAction} from "../../store/actions/SinglePost/commentsAction";

type TProps = {
    postId: number;
}

const SinglePost = ({postId}: TProps) => {
    const {singlePostLoading} = useAppSelector(state => state.singlePost)
    const {commentsLoading} = useAppSelector(state => state.comments)

    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(getSinglePostsAction(postId))
        dispatch(getCommentsAction(postId))
    }, [])

    return (
        <>
            {
                singlePostLoading && commentsLoading ? (
                    <Loader/>
                ) : (
                    <div className='singlePost'>
                        <Post/>
                        <CommentsList/>
                    </div>
                )
            }
        </>
    );
};

export default SinglePost;