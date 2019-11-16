import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/Login">Login</Link>
        </div>
    )
    return (
        <div className="nav-bar">
            
            <h1 className="logo">FameBook</h1>
            
            <div>
                {display}
            </div>
        </div>
    );
};