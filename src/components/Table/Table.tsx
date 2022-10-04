import React, {useEffect, useState} from 'react';
import {IUser} from "../../types/user";
import Header from "./components/Header";
import Row from "./components/Row";
import axios from "axios";

const Table = () => {
    const [users, setUsers] = useState([] as IUser[])

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        console.log(users)
    }, [users])

    const getUsers = async () => {
        const users = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
        console.log(users.data)
        setUsers(users.data)
    }

    // const addUsers = (usersData: any) => {
    //     usersData.forEach((user: any) => {
    //         const { street, suite, city, zipcode } = user.address
    //         const address = street + ", " + suite + ", " + city + ", " + zipcode;
    //
    //         const newUser = {
    //             ...user, addressSting: address
    //         }
    //
    //         setUsers( (prev) => ([ ...prev, newUser]) )
    //     })
    // }

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