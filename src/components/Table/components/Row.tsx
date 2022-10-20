import React from 'react';
import { TUser } from "../../../types/user/user";
import PostsList from "./Posts/PostsList";

const Row = ({ user }: TUser) => {
    const { id, name, username, email } = user
    const { street, suite, city, zipcode } = user.address
    const address = street + ", " + suite + ", " + city + ", " + zipcode;

    return (
        <div className="row" style={{backgroundColor: id % 2 == 0 ? "#E5E5E5" : "#F0F0F0"}}>
            <div className='rowContent'>
                <div className="name">{name}</div>
                <div className="userName">{username}</div>
                <div className="email">{email}</div>
                <div className="address">{address}</div>
                <PostsList userId={id}/>
            </div>
        </div>
    );
};

export default Row;