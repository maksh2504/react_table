import React, {useEffect} from 'react';
import Header from "./components/Header";
import Row from "./components/Row";
import './Table.css';
import Loader from "../Loader/Loader";
import {getUsersAction, getPostsAction} from "../../store/actions/table";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppSelector";
import {table, getUsers} from "../../store/selectors/table";

const Table = () => {
    const { users } = useAppSelector(getUsers)
    const { isLoadingPosts, isLoadingUsers } = useAppSelector(table)

    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(getUsersAction())
        dispatch(getPostsAction())
    }, [])

    return (
        <div>
            {
                isLoadingUsers || isLoadingPosts ? (
                    <Loader/>
                ) : (
                    <div>
                        <Header/>
                        {users?.map(user => <Row
                            key={user.id}
                            user={user} />)}
                    </div>
                )
            }
        </div>
    );
};

export default Table;