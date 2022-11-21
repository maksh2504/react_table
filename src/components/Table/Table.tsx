import React, {FC, useEffect} from 'react';
import './Table.css';
import Loader from "../Loader/Loader";
import {getUsersAction, getPostsAction} from "../../store/actions/table";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppSelector";
import {table, getUsers} from "../../store/selectors/table";
import {Table as AntdTable} from 'antd';
import {columns} from "./columns";

const Table: FC = () => {
    const {users} = useAppSelector(getUsers)
    const {isLoadingPosts, isLoadingUsers} = useAppSelector(table)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersAction())
        dispatch(getPostsAction())
    }, [])

    return (
        <div>
            {
                isLoadingUsers || isLoadingPosts ? (
                    <Loader/>
                ) : (
                    <AntdTable columns={columns} dataSource={users} pagination={false}/>
                )
            }
        </div>
    );
};

export default Table;
