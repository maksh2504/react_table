import {ColumnsType} from "antd/es/table";
import {IUser} from "../../types/user/user";
import PostsList from "./components/Posts/PostsList";
import React from "react";

export const columns: ColumnsType<IUser> = [
    {
        title: 'NAME',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'USER NAME',
        dataIndex: 'username',
        key: 'userName',
    },
    {
        title: 'EMAIL',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'ADDRESS',
        dataIndex: 'address',
        key: 'address',
        render: (_, {address}) => {
            const {street, suite, city, zipcode} = address
            return street + ", " + suite + ", " + city + ", " + zipcode;
        }
    },
    {
        title: 'POSTS',
        key: 'posts',
        render: (_, {id}) => (
            <PostsList userId={id}/>
        ),
    },
]
