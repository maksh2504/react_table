import React from 'react';
import {IUser} from "../types/user";
import TablePosts from "./TablePosts";

type TProps = {
    user: IUser
}
const TableRow = ({ user }: TProps) => {
    const { id, name, username, email, address } = user
    return (
        <div className="row" style={{backgroundColor: user.id % 2 == 0 ? "#E5E5E5" : "#F0F0F0"}}>
            <div className="name">{name}</div>
            <div className="userName">{username}</div>
            <div className="email">{email}</div>
            <div className="address">{address}</div>
            <TablePosts userId={id} />
        </div>
    );
};

export default TableRow;