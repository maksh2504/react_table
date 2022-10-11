import React from 'react';

const Header = () => {
    return (
        <div className="tableHead">
            <div className='headerContent'>
                <div className="headerName">NAME</div>
                <div className="headerUserName">USER NAME</div>
                <div className="headerEmail">EMAIL</div>
                <div className="headerAddress">ADDRESS</div>
                <div className="headerPosts">POSTS</div>
            </div>
        </div>
    );
};

export default Header;