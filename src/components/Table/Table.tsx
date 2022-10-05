import React, {useEffect, useState} from 'react';
import {IUser} from "../../types/user";
import Header from "./components/Header";
import Row from "./components/Row";
import {getUsers} from "../../featchers/table";

const Table = () => {
    const [users, setUsers] = useState([] as IUser[])

    useEffect(() => {
        getUsers().then(
            users => setUsers(users)
        )
    }, [])

    // useEffect(() => {
    //     console.log(users)
    // }, [users])

    return (
        <div id="table" className="table">
            <Header/>
            {users.map(user => <Row
                key={user.id}
                user={user} />)}
        </div>
    );
};

export default Table;