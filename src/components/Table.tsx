import React, {Component, useEffect, useState} from 'react';
import {IUser} from "../types/user";
import usersData from '../data/users.json'

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";


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
            const { id, name, username, email } = user
            const { street, suite, city, zipcode } = user.address
            const address = street + ", " + suite + ", " + city + ", " + zipcode;

            setUsers( (prev) => ([ ...prev, {
                id,
                name,
                username,
                email,
                address} as IUser ]) )
        })
    }

    return (
        <div id="table" className="table">
            <TableHeader/>
            {users.map(user => <TableRow
                key={user.id}
                user={user} />)}
        </div>
    );
};

export default Table;