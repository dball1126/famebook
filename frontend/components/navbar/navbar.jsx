import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../session/login_container';
import SearchBar from '../search/search_container';

export default ({ currentUser, logout}) => {
    const displayLogin = currentUser ? (
        <div>
            <img src={"https://yap-dev.s3.amazonaws.com/Screen+Shot+2020-01-19+at+10.09.28+PM.png"}/>
            <SearchBar />
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
        let logo = "no-logo"
        debugger
        if (!currentUser) logo = "logo"

    return (
        <div className="nav-bar-wrapper">
            <div className="nav-bar-box">
                <div className="nav-logo">
                    <h1 className={logo}>famebook</h1>
                </div>
                
                <div className="nav-buttons">
                        {displayLogin}
                </div>
            </div>
        </div>
    );
};