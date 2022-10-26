import {IPostsState, PostsAction, PostsActionTypes} from "../types/postsReducer";

const initialState : IPostsState = {
    posts: [],
    postsLoading: false,
    error: null,
}

export const postsReducer = (state = initialState, action: PostsAction) : IPostsState => {
    switch (action.type) {
        case PostsActionTypes.GET_POSTS:
            return {posts: [], postsLoading: true, error: null}
        case PostsActionTypes.GET_POSTS_SUCCESS:
            return {posts: state.posts.concat(action.payload), postsLoading: false, error: null}
        case PostsActionTypes.GET_POSTS_ERROR:
            return {posts: [], postsLoading: false, error: 'ERROR'}
        default:
            return state
    }
}