import React from 'react';
import {IUser} from "../types/user";

const TableRow = (user:IUser) => {
    return (
        <div className="row" style={{backgroundColor: user.id % 2 == 0 ? "#E5E5E5" : "#F0F0F0"}}>
            <div className="name">{user.name}</div>
            <div className="userName">{user.username}</div>
            <div className="email">{user.email}</div>
            <div className="address">{user.address}</div>
        </div>
    );
};

export default TableRow;