import React, {useEffect, useState} from 'react';
import {IUser} from "../../types/user/user";
import Header from "./components/Header";
import Row from "./components/Row";
import {getUsers} from "../../featchers/user";
import './Table.css';
import Loader from "../Loader/Loader";
import {useDispatch} from "react-redux";
import {getUsersAction} from "../../store/actions/usersAction";
import {useAppSelector} from "../../hooks/useAppSelector";

const Table = () => {

    const {users, loading, error} = useAppSelector(state => state.getUsers)
    const dispatch = useDispatch()


    useEffect( () => {
        dispatch(getUsersAction())
        console.log(users)
    }, [])

    return (
        <div>
            {
                loading ? (
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