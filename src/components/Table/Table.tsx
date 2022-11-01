import React, {useEffect} from 'react';
import Header from "./components/Header";
import Row from "./components/Row";
import './Table.css';
import Loader from "../Loader/Loader";
import {getUsersAction, getPostsAction} from "../../store/actions/table";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppSelector";
import {tableActions} from "../../store/slices/tableSlice";
import {getTable, getUsers} from "../../store/selectors/getTable";

const Table = () => {
    const { users } = useAppSelector(getUsers)
    const { isLoading } = useAppSelector(getTable)

    const dispatch = useAppDispatch()

    const {startLoadingPaymentInfo, stopLoadingPaymentInfo} = tableActions.isLoadingActions

    useEffect( () => {
        dispatch(startLoadingPaymentInfo())
        dispatch(getUsersAction())
        dispatch(getPostsAction())
        dispatch(stopLoadingPaymentInfo())
    }, [])

    return (
        <div>
            {
                isLoading ? (
                    <Loader/>
                ) : (
                    <div>
                        <Header/>
                        {users?.map(user => <Row
                            key={user.id}
                            user={user} />)}
                    </div>
                )
            }
        </div>
    );
};

export default Table;