import React, {useEffect} from 'react';
import Header from "./components/Header";
import Row from "./components/Row";
import './Table.css';
import Loader from "../Loader/Loader";
import {getUsersAction} from "../../store/actions/Table/usersAction";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppSelector";
import {getPostsAction} from "../../store/actions/Table/postsAction";

const Table = () => {
    const {postsLoading} = useAppSelector(state => state.posts)
    const {users, usersLoading} = useAppSelector(state => state.users)

    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(getUsersAction())
        dispatch(getPostsAction())
    }, [])

    return (
        <div>
            {
                usersLoading && postsLoading ? (
                    <Loader/>
                ) : (
                    <div>
                        <Header/>
                        {users.map(user => <Row
                            key={user.id}
                            user={user} />)}
                    </div>
                )
            }
        </div>
    );
};

export default Table;