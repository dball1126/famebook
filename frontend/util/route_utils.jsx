import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = state => {
    
    let userId = state.session.id || [];
    let currentUser;
    if (userId) currentUser = state.entities.users[userId];
    return {
    loggedIn: Boolean(currentUser)
}}

const Auth = ({ loggedIn, path, component: Component }) => (
   
        <Route path={path}
               render={props => (
                   loggedIn ? <Redirect to={'/'} /> : <Component {...props} />
               )}
               />    
);

const Protected = ({ loggedIn, path, component: Component}) => (
    <Route path={path}
           render={props => (
               loggedIn ? <Component {...props} /> : <Redirect to="signup" />
           )}
        />
);

export const AuthRoute = withRouter(connect(msp)(Auth))
export const ProtectedRoute = withRouter(connect(msp)(Protected))
