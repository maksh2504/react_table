import React, {useEffect} from 'react';
import './components/Post/Post.css'
import Post from "./components/Post/Post";
import CommentsList from "./components/Comments/CommentsList";
import './SinglePost.css'
import {useAppDispatch, useAppSelector} from "../../hooks/useAppSelector";
import {getSinglePostsAction, getCommentsAction} from "../../store/actions/singlePost";
import Loader from "../Loader/Loader";
import {singlePost} from "../../store/selectors/singlePost";

type TProps = {
    postId: number;
}

const SinglePost = ({postId}: TProps) => {
    const {isLoadingPost, isLoadingComments} = useAppSelector(singlePost)

    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(getSinglePostsAction(postId))
        dispatch(getCommentsAction(postId))
    }, [])

   return (
        <>
            {
                isLoadingPost || isLoadingComments ? (
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