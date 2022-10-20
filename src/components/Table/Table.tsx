import React, {useEffect, useState} from 'react';
import {IUser} from "../../types/user/user";
import Header from "./components/Header";
import Row from "./components/Row";
import {getUsers} from "../../featchers/user";
import './Table.css';
import Loader from "../Loader/Loader";

const Table = () => {
    const [users, setUsers] = useState([] as IUser[])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        getUsers().then(
            users => setUsers(users)
        ).finally(() => setLoading(false))
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