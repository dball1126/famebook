import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../session/login_container';
import SearchBar from '../search/search_container';

export default ({ currentUser, logout}) => {
    const displayLogin = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <>
            <LoginContainer className="btn" to="/Login">Login</LoginContainer>
        </>
    )
    const displaySignup = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            <Link className="btn" to="/signup">Sign Up</Link>
        </div>
    )
    return (
        <div className="nav-bar-wrapper">
            <div className="nav-bar-box">
                <div className="nav-logo">
                    <h1 className="logo">famebook</h1>
                </div>
                <SearchBar />
                <div className="nav-buttons">
                        {displayLogin}
                </div>
            </div>
        </div>
    );
};