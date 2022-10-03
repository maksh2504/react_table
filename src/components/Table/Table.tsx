import React, {useEffect, useState} from 'react';
import {IUser} from "../../types/user";
import usersData from '../../data/users.json'

import Header from "./components/Header";
import Row from "./components/Row";

const Table = () => {
    const [users, setUsers] = useState([] as IUser[])

    useEffect(() => {
        addUsers(usersData);
    }, [])

    useEffect(() => {
        console.log(users)
    }, [users])

    const addUsers = (usersData: any) => {
        usersData.forEach((user: any) => {
            const { street, suite, city, zipcode } = user.address
            const address = street + ", " + suite + ", " + city + ", " + zipcode;

            const newUser = {
                ...user, addressSting: address
            }

            setUsers( (prev) => ([ ...prev, newUser]) )
        })
    }

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