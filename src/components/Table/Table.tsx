import React, {useEffect, useState} from 'react';
import {IUser} from "../../types/user/user";
import Header from "./components/Header";
import Row from "./components/Row";
import {getUsers} from "../../featchers/user";
import './Table.css';

const Table = () => {
    const [users, setUsers] = useState([] as IUser[])

    useEffect(() => {
        getUsers().then(
            users => setUsers(users)
        )
    }, [])

    return (
        <div>
            <Header/>
            {users.map(user => <Row
                key={user.id}
                user={user} />)}
        </div>
    );
};

export default Table;