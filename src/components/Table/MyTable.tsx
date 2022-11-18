import React, {FC, useEffect} from 'react';
import './Table.css';
import Loader from "../Loader/Loader";
import {getUsersAction, getPostsAction} from "../../store/actions/table";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppSelector";
import {table, getUsers} from "../../store/selectors/table";
import {Spin, Table} from 'antd';
import {columns} from "./columns";

const MyTable: FC = () => {
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
                    <div className="tableContainer">
                        <Table className='tableContent' columns={columns} dataSource={users} pagination={false}/>
                    </div>
                )
            }
        </div>
    );
};

export default MyTable;
