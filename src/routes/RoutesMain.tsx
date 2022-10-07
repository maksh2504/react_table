import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import TablePage from "../pages/TablePage";
import Post from "../pages/Post";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/table' element={<TablePage/>}></Route>
            <Route path={`/post/:postId`}  element={<Post/>}></Route>
        </Routes>
    );
};

export default RoutesMain;