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
        <div className="nav-bar-wrapper">
            <div className="nav-bar-box">
                <div className="nav-logo">
                    <h1 className="logo">famebook</h1>
                </div>

                <div className="nav-buttons">
                
                        {display}

                </div>
            </div>
        </div>
    );
};