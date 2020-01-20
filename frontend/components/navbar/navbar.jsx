import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../session/login_container';
import SearchBar from '../search/search_container';

export default ({ currentUser, logout}) => {
    const displayLogin = currentUser ? (
        <div className="signed-in-nav-buttons">
            <img src={"https://yap-dev.s3.amazonaws.com/Screen+Shot+2020-01-19+at+10.09.28+PM.png"}/>
            <SearchBar />
            <p>{currentUser.username}</p>
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
        let logo = "no-logo";
        let navButtons = "signed-in-nav-buttons";
        let navWrapper = "signed-in-nav-bar-wrapper";
        if (!currentUser) {
            logo = "logo";
            navButtons = "nav-buttons";
            navWrapper = "nav-bar-wrapper";
        }

    return (
        <div className={navWrapper}>
            <div className="nav-bar-box">
                <div className="nav-logo">
                    <h1 className={logo}>famebook</h1>
                </div>
                
                <div className={navButtons}>
                        {displayLogin}
                </div>
            </div>
        </div>
    );
};