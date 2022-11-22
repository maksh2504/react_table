import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from "../pages/Home/HomePage";
import TablePage from "../pages/Table/TablePage";
import PostPage from "../pages/Post/PostPage";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={ <Navigate to="/home" /> }/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/table' element={<TablePage/>}/>
            <Route path={`/post/:postId`}  element={<PostPage/>}/>
        </Routes>
    );
};

export default RoutesMain;
