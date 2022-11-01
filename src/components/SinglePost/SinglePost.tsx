import React, {useEffect} from 'react';
import './components/Post/Post.css'
import Post from "./components/Post/Post";
import CommentsList from "./components/Comments/CommentsList";
import './SinglePost.css'
import {useAppDispatch, useAppSelector} from "../../hooks/useAppSelector";
import {getSinglePostsAction, getCommentsAction} from "../../store/actions/singlePost";
import Loader from "../Loader/Loader";
import {getSinglePost} from "../../store/selectors/getSinglePost";
import {singlePostActions} from "../../store/slices/singlePostSlice";

type TProps = {
    postId: number;
}

const SinglePost = ({postId}: TProps) => {
    const {isLoading} = useAppSelector(getSinglePost)
    const {startLoadingInfo, stopLoadingInfo} = singlePostActions.isLoadingActions

    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(startLoadingInfo())
        dispatch(getSinglePostsAction(postId))
        dispatch(getCommentsAction(postId))
        dispatch(stopLoadingInfo())
    }, [])

   return (
        <>
            {
                isLoading ? (
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