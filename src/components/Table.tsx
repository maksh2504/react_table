import React, {Component} from 'react';
import {IUser} from "../types/user";
import {IPosts} from "../types/posts";
import {ITable} from "../types/table";
import users from '../data/users.json'

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export class Table extends Component implements ITable{
    users: IUser[];
    posts: IPosts[];

    constructor(props: any) {
        super(props);

        this.users = [];
        this.posts = [];
    }

    tableInit = () => {
        this.addUsers(users);
    }

    tablePrint = () => {
        return(
            <div id="table" className="table">
                <TableHeader/>
                {this.users.map(user => <TableRow
                    key={user.id}
                    user={user} />)}
            </div>
        )
    }

    addUsers = (users: any) => {
        for(let field in users) {
            const { id, name, username, email } = users[field]

            const address = users[field].address.street + ", " + users[field].address.suite + ", " +
                users[field].address.city + ", " + users[field].address.zipcode;

            this.users.push ({
                id,
                name,
                username,
                email,
                address
            } as IUser);
        }
    }

    render = () => {
        this.tableInit();

        return (
            this.tablePrint()
        )
    }
}

export default Table;